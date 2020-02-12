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
    ExportedClass as BackendService
} from '../scripts/custom/BackendService';
import {
    ExportedClass as GroupChatService
} from '../scripts/custom/GroupChatService';
@Component({
    templateUrl: 'NewMessage.html',
    selector: 'page-new-message',
    styleUrls: ['NewMessage.scss']
})
export class NewMessage {
    public contacts: any;
    public currentItem: any = null;
    public mappingData: any = {};
    createChat(contact) {
        this.chatService.prepareChat(
                [
                    contact._id,
                    this.dataService.user._id
                ]
            )
            .then(() => this.router.navigate(['home/ChatList/chatsettings'], {
                replaceUrl: true
            }));
    }
    createGroupChat() {
        this.router.navigate(['home/ChatList/creategroupchat'], {
            replaceUrl: true
        });
    }
    async ngOnInit() {
        const trainers = await this.backendService.getTrainers();
        const users = await this.backendService.getUsers();
        this.contacts = [...trainers, ...users].filter(c => c._id !== this.dataService.user._id);
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public dataService: DataService, public chatService: GroupChatService, public backendService: BackendService, public router: Router) {}
}