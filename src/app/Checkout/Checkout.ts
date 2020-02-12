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
    ExportedClass as SubscriptionCard
} from '../scripts/custom/SubscriptionCard';
import {
    ExportedClass as SubscriptionService
} from '../scripts/custom/SubscriptionService';
import {
    Card
} from '../scripts/interfaces';
@Component({
    templateUrl: 'Checkout.html',
    selector: 'page-checkout',
    styleUrls: ['Checkout.scss']
})
export class Checkout {
    public cards: any;
    public selectedCard: Card;
    public currentItem: any = null;
    public mappingData: any = {};
    confirmCheckout() {
        this.checkoutService.confirmCheckout().then(() => {
            this.Apperyio.navigateTo("home/Profile/subscriptions"
                /*, optional, params, here */
            );
        });
    }
    ionViewWillEnter() {
        this.cards = this.checkoutService.cards;
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public checkoutService: SubscriptionService) {}
}