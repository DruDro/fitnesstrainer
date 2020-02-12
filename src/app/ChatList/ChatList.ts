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
    Observable
} from 'rxjs/Observable';
import {
    ExportedClass as DataService
} from '../scripts/custom/DataService';
import {
    ExportedClass as BackendService
} from '../scripts/custom/BackendService';
import {
    ExportedClass as GroupChatService
} from '../scripts/custom/GroupChatService';
import {
    ExportedClass as ContactsService
} from '../scripts/custom/ContactsService';
@Component({
    templateUrl: 'ChatList.html',
    selector: 'page-chat-list',
    styleUrls: ['ChatList.scss']
})
export class ChatList {
    public chats: Observable < any > ;
    public currentItem: any = null;
    public mappingData: any = {};
    openChat(chatId) {
        this.Apperyio.navigateTo("home/ChatList/chat", chatId);
    }
    async ngOnInit() {
        this.Apperyio.getController("LoadingController").create({
            message: 'Please wait...',
            spinner: 'crescent',
            duration: 2000
        }).then(loading => loading.present());
        this.chatService.getChats();
        const trainers = await this.backendService.getTrainers();
        const users = await this.backendService.getUsers();
        this.contactsService.contacts = [...users, ...trainers];
        this.Apperyio.getController("LoadingController").dismiss();
    }
    leaveChat(chat) {
        console.log(chat);
        const confirmLeave = confirm(`Do you really want to leave ${chat.name}`);
        if (confirmLeave) {
            chat.users = chat.users.filter(user => user !== this.dataService.user._id);
            const chatDoc = this.chatService.chatsCollection.doc(chat.id);
            chatDoc.update({
                updatedAt: new Date(),
                users: chat.users
            }).then(res => {
            })
        }
    }
    openChatDetails(chatId) {
        this.Apperyio.navigateTo("home/ChatList/chatdetails/", chatId);
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public dataService: DataService, public chatService: GroupChatService, public backendService: BackendService, public contactsService: ContactsService) {}
}