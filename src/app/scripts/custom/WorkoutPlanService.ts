import {
    HttpClient,
    HttpParams
} from '@angular/common/http';
import {
    Injectable
} from '@angular/core';
import {
    ApperyioHelperService
} from '../apperyio/apperyio_helper';
/*
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
class WorkoutPlanService {

    public pendingWorkout: any;
    private selectedWorkoutType: any;

    setName(name: string) {
        this.pendingWorkout.name = name;
        console.log('Pending name', this.pendingWorkout.name)
    }

    setTime(time: string, workoutType: string = this.selectedWorkoutType) {
        this.getActivity(workoutType).time = time
        console.log('Pending time', time)
    }

    setTrainer(trainer: string, workoutType: string = this.selectedWorkoutType) {
        this.getActivity(workoutType).trainer = trainer
        console.log('Pending trainer', trainer)
    }

    setDays(days: string[], workoutType: string = this.selectedWorkoutType) {
        this.getActivity(workoutType).days = days
        console.log('Pending days', days)
    }

    clearPendingWorkout() {
        this.pendingWorkout = {
            name: "",
            activities: []
        };
        this.selectedWorkoutType = '';
        console.log('cleared pending workout', this.pendingWorkout)
    }

    getActivity(workoutType: string) {
        return this.pendingWorkout.activities.find(activity => activity.workoutType._id == workoutType)
    }

    selectActivity(workoutType: string) {
        this.selectedWorkoutType = workoutType;
    }

    constructor(private Apperyio: ApperyioHelperService) {}

}

/*
    Service class should be exported as ExportedClass
*/
export {
    WorkoutPlanService as ExportedClass
};