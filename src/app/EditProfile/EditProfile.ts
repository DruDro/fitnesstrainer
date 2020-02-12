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
    User,
    Card
} from '../scripts/interfaces';
@Component({
    templateUrl: 'EditProfile.html',
    selector: 'page-edit-profile',
    styleUrls: ['EditProfile.scss']
})
export class EditProfile {
    public showMembers: boolean = false;
    public user: User = this.dataService.user;
    public cards: any = [{
        cardType: 'debit',
        expirationDate: {
            month: '05',
            year: '2022'
        },
        cardProvider: 'MasterCard',
        lastFourDigits: '1234'
    }, {
        cardType: 'debit',
        expirationDate: {
            month: '07',
            year: '2025'
        },
        cardProvider: 'Visa',
        lastFourDigits: '4567'
    }, {
        cardType: 'debit',
        expirationDate: {
            month: '05',
            year: '2019'
        },
        cardProvider: 'Bank Account',
        lastFourDigits: '4321'
    }];
    public selectedCard: Card;
    public currentItem: any = null;
    public mappingData: any = {};
    ngOnInit() {
        console.log(this.dataService)
    }
    async updateUser() {
        try {
            this.dataService.user = this.user;
            this.Apperyio.navigateTo('home/Profile/accountdetails');
        } catch (err) {
            console.log(err)
        }
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public dataService: DataService) {}
}