import {
    Component,
    ChangeDetectorRef
} from '@angular/core';
import {
    ApperyioHelperService
} from '../scripts/apperyio/apperyio_helper';
import {
    ApperyioMappingHelperService
} from '../scripts/apperyio/apperyio_mapping_helper';
import {
    Router
} from '@angular/router';
import {
    ActivatedRoute
} from '@angular/router';
import {
    Observable
} from 'rxjs/Observable';
import {
    ExportedClass as DataService
} from '../scripts/custom/DataService';
import {
    ExportedClass as BackendService
} from '../scripts/custom/BackendService';
import {
    AngularFirestoreCollection
} from '@angular/fire/firestore';
import {
    AngularFirestoreDocument
} from '@angular/fire/firestore';
import {
    AngularFirestore
} from '@angular/fire/firestore';
import {
    take
} from 'rxjs/operators';
@Component({
    templateUrl: 'ChatDetails.html',
    selector: 'page-chat-details',
    styleUrls: ['ChatDetails.scss']
})
export class ChatDetails {
    public id: string;
    public contacts: any;
    public chatName: string = '';
    public picture: string;
    public chatDoc: AngularFirestoreDocument;
    public chat: any;
    public currentItem: any = null;
    public mappingData: any = {};
    async ngOnInit() {
        this.id = this.route.snapshot.params.id;
        this.chatDoc = this.afs.collection('chats').doc(this.id);
        this.chat = await this.chatDoc.valueChanges().pipe(take(1)).toPromise();
        this.chatName = this.chat.name;
        this.picture = this.chat.picture;
        const trainers = await this.backendService.getTrainers();
        const users = await this.backendService.getUsers();
        let contacts = [...trainers, ...users];
        let chatUsers = [];
        for (let contact of this.chat.users) {
            const user = contacts.find(c => c._id === contact);
            chatUsers.push(user)
        }
        this.contacts = chatUsers;
    }
    async save() {
        this.chatDoc.update({
            updatedAt: new Date(),
            name: this.chatName,
            picture: this.picture,
            users: this.chat.users
        }).then(res => {
            if (this.chat.users.find(user => user == this.dataService.user._id)) {
                this.router.navigate([`home/ChatList/chat/${this.id}`], {
                    replaceUrl: true
                })
            } else {
                this.router.navigate(['home/ChatList/chatlist/'], {
                    replaceUrl: true
                })
            }
        })
    }
    leaveChat() {
        const confirmLeave = confirm(`Do you really want to leave ${this.chatName}`);
        if (confirmLeave) {
            this.chat.users = this.chat.users.filter(user => user !== this.dataService.user._id);
            this.save()
        }
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public route: ActivatedRoute, public backendService: BackendService, public afs: AngularFirestore, public dataService: DataService, public router: Router) {}
}