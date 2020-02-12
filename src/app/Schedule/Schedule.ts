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
    ExportedClass as BackendService
} from '../scripts/custom/BackendService';
@Component({
    templateUrl: 'Schedule.html',
    selector: 'page-schedule',
    styleUrls: ['Schedule.scss']
})
export class Schedule {
    public workouts: any = [];
    public availableWorkouts: any = [];
    public trainers: any = [];
    public allWorkouts: any;
    public workoutTypes: any = [];
    public today: any = new Date();
    public currentItem: any = null;
    public mappingData: any = {};
    public selectedDates: any = [];
    compareFunc(val) {
        return val;
    }
    async ionViewWillEnter() {
        this.Apperyio.getController("LoadingController").create({
            message: 'Please wait...',
            spinner: 'crescent',
            duration: 2000
        }).then(loading => loading.present());
        this.allWorkouts = await this.dataService.trainer.workouts;
        this.Apperyio.getController("LoadingController").dismiss();
        this.workoutTypes = await this.backendService.getWorkoutTypes();
    }
    filterWorkoutsByDates(selectedDates) {
        this.selectedDates = selectedDates;
        const selectedDateStrings = selectedDates.map(date => date.toDateString());
        this.availableWorkouts = this.allWorkouts.filter(({
            date
        }) => {
            return selectedDateStrings.includes(date.toDateString());
        });
        this.workouts = this.availableWorkouts;
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public dataService: DataService, public backendService: BackendService) {}
    
}