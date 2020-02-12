import { Component, Input } from '@angular/core';
import {
    Card
} from '../interfaces';
import {
    ExportedClass as DataService
} from '../custom/DataService';
import {
    ApperyioHelperService
} from '../apperyio/apperyio_helper';
/**
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'credit-card',
  template: `
    <div class="credit-card">
        <ion-grid>
            <ion-row class="ion-justify-content-between">
                <ion-col>{{card.cardType}} card</ion-col>
                <ion-col></ion-col>
            </ion-row>
        </ion-grid>
    </div>
  `,
  styles: []
})

class CreditCardComponent {
    @Input() card: Card;
    
    constructor(public dataService: DataService, private Apperyio: ApperyioHelperService) {
        console.log('Hello CreditCard Component');
    }
}

/*
    Component class should be exported as ExportedClass
*/
export { CreditCardComponent as ExportedClass };
