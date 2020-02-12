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
    templateUrl: 'Profile.html',
    selector: 'page-profile',
    styleUrls: ['Profile.scss']
})
export class Profile {
    public workoutList: any = [];
    public todayFilter: boolean = false;
    public currentItem: any = null;
    public mappingData: any = {};
    goToReferrals() {
        this.Apperyio.navigateTo("home/Profile/referrals");
    }
    async ionViewWillEnter() {
        this.Apperyio.getController("LoadingController").create({
            message: 'Please wait...',
            spinner: 'crescent',
            duration: 2000
        }).then(loading => loading.present());
        this.Apperyio.getController("LoadingController").dismiss();
    }
    getWorkoutList() {
    }
    isWorkoutHidden(userId, workout) {
        if (this.todayFilter && !(workout.date.toDateString() === (new Date().toDateString()))) {
            return true;
        }
        return false;
    }
    ionViewDidLeave() {
    }
    isShowWorkoutDate(workout) {
        return workout.date.toDateString() !== new Date().toDateString();
    }
    async ngAfterViewInit() {
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public dataService: DataService, public backendService: BackendService) {}
}