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
    ModalController
} from '@ionic/angular';
import {
    Input
} from '@angular/core';
@Component({
    templateUrl: 'DirectionsDetailsModal.html',
    selector: 'page-directions-details-modal',
    styleUrls: ['DirectionsDetailsModal.scss']
})
export class DirectionsDetailsModal {
    @Input() public routes: any;
    public currentItem: any = null;
    public mappingData: any = {};
    ionViewWillEnter() {
        this.routes.forEach(route => {
            document.getElementsByClassName('details-grid')[0].insertAdjacentHTML('beforeend', `<ion-row class="locations-instructions"><ion-col>${route.instructions}</ion-col><ion-col class="duration-col" text-right><ion-text class="duration">${route.duration.text}</ion-text><ion-text class="distance">${route.distance.text}</ion-text></ion-col></ion-row>`);
        });
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public modalCtrl: ModalController) {}
}