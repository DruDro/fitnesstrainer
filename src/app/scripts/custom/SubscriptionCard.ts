import {
    Component,
    Input
} from '@angular/core';
import {
    Subscription
} from '../interfaces';
import {
    ExportedClass as CheckoutService
} from '../custom/SubscriptionService';
import {
    ApperyioHelperService
} from '../apperyio/apperyio_helper';

/**
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
    selector: 'subscription-card',
    template: `
<ion-card class="subscription-card" [ngClass]="{'current-pack': this.subscription.isCurrent}">
    <ion-card-content>
        <ion-grid>
            <ion-row align-items-center justify-content-between nowrap>
                <ion-col>
                    <h3>
                        <ion-text color="dark">
                            {{subscription.title}}
                        </ion-text>
                    </h3>
                    <p>
                        <ion-text color="dark">
                            &#x24;{{subscription.pricePerClass}}/class
                        </ion-text>
                    </p>
                </ion-col>
                <ion-col>
                    <div class="subscription-invoice ion-text-center" [ngClass]="{'current-pack': subscription.isCurrent}">
                        <ion-note class="subscription__discount" [hidden]="subscription.invoiceSent">
                            <ion-text color="primary">
                                SAVE &#x24;{{subscription.discount}}
                            </ion-text>
                        </ion-note>
                        <h3 class="subscription__price">
                            <ion-text color="dark">
                                &#x24;{{subscription.price}}
                            </ion-text>
                        </h3>
                        <ion-button button-type="button" expand="full" shape="round" strong="true" class="subscription__buy" (click)="buy()"
                        [hidden]="subscription.invoiceSent == true || hideBuyButton == true ">
                            BUY
                        </ion-button>
                        <ion-note class="subscription__status" [hidden]="(subscription.invoiceSent == false || subscription.isCurrent == true)">
                            <ion-text color="primary">
                                INVOICE SENT
                            </ion-text>
                        </ion-note>
                        <ion-note class="subscription__status" [hidden]="(subscription.isCurrent == false)">
                            <ion-text color="success">
                                CURRENT PACK
                            </ion-text>
                        </ion-note>
                    </div>
                </ion-col>
            </ion-row>
        </ion-grid>
    </ion-card-content>
</ion-card>
  `,
    styles: [`
    .subscription-invoice {
        background: #EFF3FD;
        border-radius: 8px;
        padding: 15px;
        width: 130px;
        height: 130px;
        position: relative;
        margin: 0 0 0 auto;
    }
    .subscription-invoice.current-pack{
        background: #EAFBF7;
    }
    .subscription__discount {
        font-weight: bold;
    }
    .subscription__price {
        position: absolute;
        top: 35px;
        left: 50%;
        transform: translateX(-50%);
    }
    .subscription__status {
        font-weight: bold;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 15px;
        white-space: nowrap;
    }
    .subscription__buy {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 15px;
    }
    .subscription-card {
        border: 8px solid var(--ion-color-primary);
        border-width: 0 0 0 8px;
    }
    .subscription-card.current-pack {
        border-color: var(--ion-color-success);
        border-width: 2px 2px 2px 8px;
    }
  `]
})
class SubscriptionCardComponent {
    @Input() subscription: Subscription;
    @Input() hideBuyButton = false;
    constructor(public checkoutService: CheckoutService, private Apperyio: ApperyioHelperService) {}
    buy(){
        this.checkoutService.pendingSubscription = this.subscription;
        this.Apperyio.navigateTo("home/Profile/checkout"/*, optional, params, here */);
    }
}

/*
    Component class should be exported as ExportedClass
*/
export {
    SubscriptionCardComponent as ExportedClass
};