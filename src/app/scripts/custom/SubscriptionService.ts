import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApperyioHelperService } from '../apperyio/apperyio_helper';
import {
    Subscription
} from '../interfaces';
/*
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
class SubscriptionService {
        public cards = [{
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
    
    public subscriptions = [{
        id: 1,
        title: '5 Class Pack Fitness World',
        pricePerClass: 31,
        price: 155,
        discount: 10,
        invoiceSent: false,
        isCurrent: false
    }, {
        id: 2,
        title: '10 Class Pack Fitness World',
        pricePerClass: 62,
        price: 310,
        discount: 20,
        invoiceSent: false,
        isCurrent: false
    }, {
        id: 3,
        title: '15 Class Pack Fitness World',
        pricePerClass: 93,
        price: 465,
        discount: 30,
        invoiceSent: true,
        isCurrent: true
    }, {
        id: 4,
        title: '20 Class Pack Fitness World',
        pricePerClass: 124,
        price: 620,
        discount: 40,
        invoiceSent: false,
        isCurrent: false
    }];
    public pendingSubscription: Subscription;
    
    public confirmCheckout = function() {
        const sub = this.subscriptions.find(subscription => subscription.id === this.pendingSubscription.id);
        sub.invoiceSent = true;
        return new Promise((res, rej) => res())
    }
    constructor(private Apperyio: ApperyioHelperService) {}
}

/*
    Service class should be exported as ExportedClass
*/
export { SubscriptionService as ExportedClass };