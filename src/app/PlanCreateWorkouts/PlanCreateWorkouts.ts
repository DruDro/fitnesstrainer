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
    templateUrl: 'PlanCreateWorkouts.html',
    selector: 'page-plan-create-workouts',
    styleUrls: ['PlanCreateWorkouts.scss']
})
export class PlanCreateWorkouts {
    public activities: any = [];
    public currentItem: any = null;
    public mappingData: any = {};
    async ionViewWillEnter() {
        this.activities = this.planService.pendingWorkout.activities;
    }
    async saveWorkout() {
        const pendingWorkout = this.planService.pendingWorkout;
        const activities = pendingWorkout.activities.map(activity => ({
            workoutType: activity.workoutType._id,
            trainer: activity.trainer._id,
            time: activity.time,
            days: activity.days
        }));
        const createdWorkout = await this.backendService.createWorkoutPlan(JSON.stringify({
            name: pendingWorkout.name,
            activities
        }));
        console.log(createdWorkout);
        this.Apperyio.navigateTo(`home/Schedule/myworkouts`)
    }
    isDisabledAddButton() {
        return !this.activities.every(activity => activity.trainer && activity.time && activity.days) || !this.planService.pendingWorkout.name;
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public planService: WorkoutPlanService, public backendService: BackendService) {}
}