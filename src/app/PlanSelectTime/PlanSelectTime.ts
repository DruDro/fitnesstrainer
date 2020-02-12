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
    ExportedClass as WorkoutPlanService
} from '../scripts/custom/WorkoutPlanService';
import * as moment from 'moment'
@Component({
    templateUrl: 'PlanSelectTime.html',
    selector: 'page-plan-select-time',
    styleUrls: ['PlanSelectTime.scss']
})
export class PlanSelectTime {
    public days: any = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    public selectedDays: any = [];
    public startTime: string;
    public currentItem: any = null;
    public mappingData: any = {};
    ionViewWillEnter() {
        this.startTime = new Date().toISOString()
    }
    selectDay(day) {
        if (this.selectedDays.includes(day)) {
            const index = this.selectedDays.indexOf(day);
            this.selectedDays.splice(index, 1);
        } else {
            this.selectedDays.push(day);
        }
    }
    save() {
        console.log(this.startTime)
        this.planService.setDays(this.selectedDays);
        this.planService.setTime(moment(this.startTime).format('h:mm A'));
        this.Apperyio.navigateTo(`home/Schedule/plancreateworkouts`);
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public planService: WorkoutPlanService) {}
}