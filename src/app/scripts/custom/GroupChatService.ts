import {
    HttpClient,
    HttpParams
} from '@angular/common/http';
import {
    Injectable
} from '@angular/core';
import {
    ApperyioHelperService
} from '../apperyio/apperyio_helper';
import {
    AngularFirestore,
    AngularFirestoreDocument,
    AngularFirestoreCollection
} from '@angular/fire/firestore';
import {
    map
} from 'rxjs/operators';
import {
    Observable
} from 'rxjs/Observable';
import {
    ExportedClass as DataService
} from '../custom/DataService';
import {
    User,
    Org,
    Trainer,
    Chat
} from '../interfaces';
/*
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
class GroupChatService {
    chatsCollection: AngularFirestoreCollection < Chat > ;
    chats: Observable < Chat[] > ;
    public pendingContacts: string[];
    public chatId: string;
    public chatDoc: AngularFirestoreDocument < Chat > ;
    public chat: Observable < Chat > ;
    public messagesCollection: AngularFirestoreCollection < any > ;
    public messages: Observable < any[] > ;
    private pingChats: number;
    constructor(
        private Apperyio: ApperyioHelperService,
        private afs: AngularFirestore,
        private dataService: DataService) {
    }    
    getChat(id: string) {
        this.chatDoc = this.afs.collection('chats').doc(id);
        this.chat = this.chatDoc.valueChanges();
        return this.chat;
    }
    getChats(): Observable < Chat[] > {
        this.chatsCollection = this.afs.collection < Chat > ('chats', ref => ref.where('users', 'array-contains', this.dataService.user._id));

        this.chats = this.chatsCollection.snapshotChanges().pipe(
            map(docs => docs.map((a: any) => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return {
                    id,
                    ...data
                };
            })),
            map(docs => docs.sort((a, b) => a.updatedAt > b.updatedAt ? -1 : 1)),
            map(docs => {
                const withoutDuplicates = docs.filter((doc, index) => {
                    return index === docs.findIndex(obj => {
                        return JSON.stringify(obj) === JSON.stringify(doc);
                    });
                });
                return withoutDuplicates;
            })
        );
        return this.chats
    }
    getMessages(): Observable < any[] > {
        this.messagesCollection = this.chatsCollection.doc(this.chatId).collection('messages');

        this.messages = this.messagesCollection.snapshotChanges().pipe(
            map(docs => {
                const mappedMessages = docs.map((a: any) => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return {
                        id,
                        ...data
                    };
                });
                return mappedMessages.sort((a, b) => a.createdAt < b.createdAt ? -1 : 1)
            }),
            map(docs => {
                const withoutDuplicates = docs.filter((doc, index) => {
                    return index === docs.findIndex(obj => {
                        return JSON.stringify(obj) === JSON.stringify(doc);
                    });
                });
                return withoutDuplicates;
            })
        );
        return this.messages
    }
    sendMessage(msg: any) {

        this.chatDoc.collection('messages').add(msg);
        return this.chatDoc.update({
            updatedAt: new Date(),
            lastMessage: msg
                // messages: this.messages
        }).then(res => Promise.resolve(res))
    }

    prepareChat(users: string[]): Promise < any > {
        this.pendingContacts = users;
        return new Promise((res, rej) => res('chat prepared'));
    }

    createChat(name: string): Promise < any > {
        let lastVisited = {};
        this.pendingContacts.forEach(c => lastVisited[c] = new Date());
        const welcomeMessage = {
            text: 'Welcome to the chat!',
            uid: this.dataService.user._id,
            createdAt: new Date(),
            richLinks: [],
        };
        return this.chatsCollection.add({
                users: this.pendingContacts,
                name,
                picture: "",
                uid: this.dataService.user._id,
                createdAt: new Date(),
                updatedAt: new Date(),
                lastVisited,
                lastMessage: welcomeMessage
            })
            .then(chat => this.chatsCollection.doc(chat.id).collection('messages').add(welcomeMessage)
                .then(res => Promise.resolve(chat))
            )
    }
    updateLastVisited() {
        return this.chatsCollection.doc(this.chatId).update({
            ["lastVisited." + this.dataService.user._id]: new Date()
        })
    }
}

/*
    Service class should be exported as ExportedClass
*/
export {
    GroupChatService as ExportedClass
};