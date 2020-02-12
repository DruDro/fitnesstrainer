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
    ExportedClass as DataService
} from '../scripts/custom/DataService';
import {
    ExportedClass as GroupChatService
} from '../scripts/custom/GroupChatService';
import {
    ExportedClass as ContactsService
} from '../scripts/custom/ContactsService';
@Component({
    templateUrl: 'CreateGroupChat.html',
    selector: 'page-create-group-chat',
    styleUrls: ['CreateGroupChat.scss']
})
export class CreateGroupChat {
    public selectedContacts: any = [];
    public contacts: any;
    public currentItem: any = null;
    public mappingData: any = {};
    createChat() {
        this.chatService.prepareChat(
                [
                    ...this.selectedContacts,
                    this.dataService.user._id
                ]
            )
            .then(() => this.router.navigate(['home/ChatList/chatsettings'], {
                replaceUrl: true
            }));
    }
    toggleContact(contact) {
        if (this.selectedContacts.length) {
            const inArray = this.selectedContacts.find(c => c === contact._id);
            let newArray = this.selectedContacts;
            if (inArray) {
                newArray = this.selectedContacts.filter(c => c !== contact._id);
            } else {
                newArray.push(contact._id)
            }
            this.selectedContacts = newArray;
        } else this.selectedContacts.push(contact._id)
    }
    ngOnInit() {
        this.contacts = this.contactsService.contacts.filter(c => c._id !== this.dataService.user._id);
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public chatService: GroupChatService, public dataService: DataService, public contactsService: ContactsService, public router: Router) {}
}