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
    templateUrl: 'MyWorkouts.html',
    selector: 'page-my-workouts',
    styleUrls: ['MyWorkouts.scss']
})
export class MyWorkouts {
    public workoutPlans: any;
    public currentItem: any = null;
    public mappingData: any = {};
    async ionViewWillEnter() {
        this.planService.clearPendingWorkout();
        this.Apperyio.getController("LoadingController").create({
            message: 'Please wait...',
            spinner: 'crescent',
            duration: 2000
        }).then(loading => loading.present());
        this.workoutPlans = await this.backendService.getWorkoutPlans();
        console.log(this.workoutPlans);
        this.Apperyio.getController("LoadingController").dismiss();
    }
    async deleteWorkoutPlan(plan) {
        this.Apperyio.getController("LoadingController").create({
            message: 'Please wait...',
            spinner: 'crescent',
            duration: 2000
        }).then(loading => loading.present());
        const deleteWorkoutPlan = await this.backendService.deleteWorkoutPlan(plan._id);
        this.workoutPlans = await this.backendService.getWorkoutPlans();
        this.Apperyio.getController("LoadingController").dismiss();
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public backendService: BackendService, public planService: WorkoutPlanService) {}
}