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
    ViewChild
} from '@angular/core';
import {
    ExportedClass as DataService
} from '../scripts/custom/DataService';
import {
    ExportedClass as BackendService
} from '../scripts/custom/BackendService';
import {
    ExportedClass as SubscriptionService
} from '../scripts/custom/SubscriptionService';
import {
    User,
    Card
} from '../scripts/interfaces';
@Component({
    templateUrl: 'AccountDetails.html',
    selector: 'page-account-details',
    styleUrls: ['AccountDetails.scss']
})
export class AccountDetails {
    public showMembers: boolean = false;
    public user: User = this.dataService.user;
    public cards: any;
    public selectedCard: Card;
    public familyUsers: any = [];
    public currentItem: any = null;
    public mappingData: any = {};
    async ionViewWillEnter() {
        this.cards = this.checkoutService.cards;
        this.familyUsers = await this.backendService.getFamilyUsers();
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public dataService: DataService, public backendService: BackendService, public checkoutService: SubscriptionService) {}
}