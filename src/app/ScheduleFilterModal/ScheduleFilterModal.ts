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
import {
    Input
} from '@angular/core';
@Component({
    templateUrl: 'ScheduleFilterModal.html',
    selector: 'page-schedule-filter-modal',
    styleUrls: ['ScheduleFilterModal.scss']
})
export class ScheduleFilterModal {
    public locations: any = [{
        iconName: 'house',
        info: {
            type: 'Near home',
            address: 'Lentvaris st.'
        }
    }, {
        iconName: 'office',
        info: {
            type: 'Near work',
            address: 'Trakai st.'
        }
    }];
    public activities: any = ['Yoga', 'Surfing', 'Run', 'Roller', 'Canoe', 'Boxing', 'Pool', 'Tennis', 'Athletics', 'Soccer', 'Darts', 'Cycling'];
    @Input() public filter: any = {
        activities: [],
        coaches: [],
        locations: []
    };
    @Input() public trainers: any = [];
    @Input() public workoutTypes: any = [];
    public currentItem: any = null;
    public mappingData: any = {};
    async ionViewWillEnter() {
        const element = document.getElementsByClassName('modal-content')[0];
        var hammertime = new Hammer(element);
        hammertime.get('pan').set({
            direction: Hammer.DIRECTION_ALL
        });
    }
    dismiss() {
        this.modalCtrl.dismiss(this.filter);
    }
    selectFilter(type, value) {
        switch (type) {
            case 'activity':
                const activityIndex = this.filter.activities.indexOf(value);
                activityIndex !== -1 ? this.filter.activities.splice(activityIndex, 1) : this.filter.activities.push(value);
                break;
            case 'coach':
                const coachIndex = this.filter.coaches.indexOf(value);
                coachIndex !== -1 ? this.filter.coaches.splice(coachIndex, 1) : this.filter.coaches.push(value);
                break;
            case 'location':
                const locationIndex = this.filter.locations.indexOf(value);
                locationIndex !== -1 ? this.filter.locations.splice(locationIndex, 1) : this.filter.locations.push(value);
                break;
            default:
                break;
        }
    }
    isApplyButtonDisabled() {
        // return !this.filter.activities.length && !this.filter.coaches.length && !this.filter.locations.length;
        return false;
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public dataService: DataService, public modalCtrl: ModalController) {}
}