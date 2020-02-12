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
    ExportedClass as DataService
} from '../scripts/custom/DataService';
import Hammer from 'hammerjs';
@Component({
    templateUrl: 'ScheduleNavigationModal.html',
    selector: 'page-schedule-navigation-modal',
    styleUrls: ['ScheduleNavigationModal.scss']
})
export class ScheduleNavigationModal {
    public currentItem: any = null;
    public mappingData: any = {};
    async ionViewWillEnter() {
        const element = document.getElementsByClassName('modal-content')[0];
        var hammertime = new Hammer(element);
        hammertime.get('pan').set({
            direction: Hammer.DIRECTION_ALL
        });
    }
    dismiss(tab ? ) {
        this.Apperyio.navigateTo(`home/Schedule/${tab}`);
        this.modalCtrl.dismiss();
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public modalCtrl: ModalController) {}
}