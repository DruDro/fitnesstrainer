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
    ExportedClass as BackendService
} from '../scripts/custom/BackendService';
import {
    ExportedClass as WorkoutPlanService
} from '../scripts/custom/WorkoutPlanService';
@Component({
    templateUrl: 'PlanBrowseActivities.html',
    selector: 'page-plan-browse-activities',
    styleUrls: ['PlanBrowseActivities.scss']
})
export class PlanBrowseActivities {
    public activities: any;
    public selectedActivities: any = [];
    public pendingActivities: any;
    public currentItem: any = null;
    public mappingData: any = {};
    async ionViewWillEnter() {
        this.Apperyio.getController("LoadingController").create({
            message: 'Please wait...',
            spinner: 'crescent',
            duration: 2000
        }).then(loading => loading.present());
        const activities = await this.backendService.getWorkoutTypes();
        this.selectedActivities = this.planService.pendingWorkout.activities.map(({
            workoutType
        }) => workoutType);
        console.log(this.selectedActivities)
        this.activities = activities.map(activity => {
            activity.isChecked = this.isCheckedActivity(activity._id);
            return activity
        })
        console.log('activities', this.activities);
        this.Apperyio.getController("LoadingController").dismiss();
    }
    checkActivity(activity) {
        const selected = this.isCheckedActivity(activity._id);
        console.log(activity.name, activity.isChecked, selected, activity.isChecked && selected)
        if (activity.isChecked && !selected) {
            this.selectedActivities.push(activity);
        } else {
            this.selectedActivities = this.selectedActivities.filter(selectedActivity => selectedActivity._id !== activity._id);
        }
        console.log(activity.name, activity.isChecked, this.isCheckedActivity(activity._id), activity.isChecked && selected)
    }
    addActivities() {
        const pendingActivities = this.planService.pendingWorkout.activities.map(act => act.workoutType._id);
        this.activities.forEach(WT => {
            const pendingWTIndex = pendingActivities.indexOf(WT._id);
            if (WT.isChecked) {
                pendingWTIndex === -1 && this.planService.pendingWorkout.activities.push({
                    workoutType: WT,
                    trainer: "",
                    time: "",
                    days: []
                })
            } else {
                pendingWTIndex > -1 && this.planService.pendingWorkout.activities.splice(pendingWTIndex, 1)
            }
        })
        console.log(this.planService.pendingWorkout)
        this.Apperyio.navigateTo(`home/Schedule/plancreateworkouts`);
    }
    isCheckedActivity(activityId) {
        const selectedActivityIds = this.selectedActivities.map(activity => activity._id);
        return selectedActivityIds.includes(activityId);
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public backendService: BackendService, public planService: WorkoutPlanService) {}
}