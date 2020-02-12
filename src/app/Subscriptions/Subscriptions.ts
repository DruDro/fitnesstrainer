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
    ExportedClass as DataService
} from '../scripts/custom/DataService';
import {
    ExportedClass as SubscriptionCard
} from '../scripts/custom/SubscriptionCard';
import {
    ExportedClass as SubscriptionService
} from '../scripts/custom/SubscriptionService';
@Component({
    templateUrl: 'Subscriptions.html',
    selector: 'page-subscriptions',
    styleUrls: ['Subscriptions.scss']
})
export class Subscriptions {
    public subscriptions: any;
    public currentItem: any = null;
    public mappingData: any = {};
    ionViewWillEnter() {
        this.subscriptions = this.checkoutService.subscriptions;
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public dataService: DataService, public checkoutService: SubscriptionService) {}
}