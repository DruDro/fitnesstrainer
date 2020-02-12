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
import {
    ExportedClass as DataService
} from './DataService';
/*
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
class BackendService {

    async bookWorkout(workoutId: string) {
        const fitnessBookWorkoutService = await this.Apperyio.getService("fitness2_book_workout_service");
        const workout = await fitnessBookWorkoutService.execute({
            params: {
                userId: this.dataService.user._id,
                workoutId
            }
        }).toPromise();

        return workout;
    }

    async getTrainers() {
        const fitnessTrainersService = await this.Apperyio.getService("fitness2_trainers_service");
        const trainers = await fitnessTrainersService.execute({
            params: {
                locationId: this.dataService.user.location._id
            }
        }).toPromise();

        return trainers;
    }

    async getTrainer(trainerId) {
        const fitnessTrainerService = await this.Apperyio.getService("fitness2_trainer_service");
        const trainer = await fitnessTrainerService.execute({
            params: {
                trainerId
            }
        }).toPromise();
        trainer.workouts = trainer.workouts.map(workout => {
            workout.date = new Date(workout.date.$date);
            return workout;
        });

        return trainer;
    }

    async getWorkoutTypes() {
        const fitnessWorkoutTypesService = await this.Apperyio.getService("fitness2_workout_types_service");
        const workoutTypes = await fitnessWorkoutTypesService.execute({}).toPromise();

        return workoutTypes;
    }

    async getAvailableWorkouts() {
        const fitnessAvailableWorkoutsService = await this.Apperyio.getService("fitness2_available_workouts_service");
        let availableWorkouts = await fitnessAvailableWorkoutsService.execute({
            params: {
                userId: this.dataService.user._id
            }
        }).toPromise();
        availableWorkouts = availableWorkouts.map(workout => {
            workout.date = new Date(workout.date.$date);
            return workout;
        });

        return availableWorkouts;
    }

    async getNextWorkout() {
        const fitnessNextWorkoutService = await this.Apperyio.getService("fitness2_next_workout_service");
        const nextWorkout = await fitnessNextWorkoutService.execute({
            params: {
                userId: this.dataService.user._id
            }
        }).toPromise();
        if (nextWorkout && nextWorkout.date) {
            nextWorkout.date = new Date(nextWorkout.date.$date);
        }

        return nextWorkout;
    }

    async getUsers() {
        const fitnessUsersService = await this.Apperyio.getService("fitness2_users_service");
        const users = await fitnessUsersService.execute({
            params: {
                locationId: this.dataService.user.location._id
            }
        }).toPromise();

        return users;
    }

    async getFamilyUsers() {
        const fitnessUsersService = await this.Apperyio.getService("fitness2_family_users_service");
        const users = await fitnessUsersService.execute({
            params: {
                userId: this.dataService.user._id
            }
        }).toPromise();

        return users;
    }

    async getCampTerm(campTermId: string) {
        const fitnessCampService = await this.Apperyio.getService("fitness2_camp_service");
        const campTerm = await fitnessCampService.execute({
            params: {
                campTermId
            }
        }).toPromise();
        return campTerm;
    }

    async bookCampTerm(campTermId: string, users: string[]) {
        const fitnessCampBookService = await this.Apperyio.getService("fitness2_book_camp_service");
        const campTerm = await fitnessCampBookService.execute({
            data: {
                users
            },
            params: {
                campTermId
            }
        }).toPromise();
        return campTerm;
    }

    async getCamps(term: number) {
        const fitnessCampsService = await this.Apperyio.getService("fitness2_camps_service");
        const camps = await fitnessCampsService.execute({
            params: {
                term,
                orgId: this.dataService.user.org._id
            }
        }).toPromise();

        return camps;
    }

    async getFamilyWorkouts() {
        const fitnessFamilyWorkoutsService = await this.Apperyio.getService("fitness2_family_workouts_service");
        let familyWorkouts = await fitnessFamilyWorkoutsService.execute({
            params: {
                userId: this.dataService.user._id
            }
        }).toPromise();

        familyWorkouts = familyWorkouts.map(user => {
            user.workouts = user.workouts.map(workout => {
                workout.date = new Date(workout.date.$date);
                return workout;
            });
            return user;
        });

        return familyWorkouts;
    }

    async getLocations() {
        const fitnessLocationsService = await this.Apperyio.getService("fitness2_locations_service");
        const locations = await fitnessLocationsService.execute({
            params: {
                orgId: this.dataService.user.org._id
            }
        }).toPromise();

        return locations;
    }

    async getUserInfo(userId) {
        const fitnessUserService = await this.Apperyio.getService("fitness2_user_service");
        const user = await fitnessUserService.execute({
            params: {
                userId
            }
        }).toPromise();

        return user;
    }

    async login(userData) {
        const loginService = await this.Apperyio.getService("fitness2_login_service");
        const response = await loginService.execute({
            data: userData
        }).toPromise();

        return response;
    }

    async getCourts() {
        const fitnessCourtService = await this.Apperyio.getService("fitness2_courts_service");
        const courts = await fitnessCourtService.execute({
            params: {
                orgId: this.dataService.user.org._id
            }
        }).toPromise();

        return courts;
    }

    async getCourtSchedule(date: string) {
        const fitnessCourtScheduleService = await this.Apperyio.getService("fitness2_court_schedule_service");
        let schedule = await fitnessCourtScheduleService.execute({
            params: {
                date,
                orgId: this.dataService.user.org._id
            }
        }).toPromise();
        
        schedule = schedule.map(court => {
            court.date = new Date(court.date.$date);
            return court;
        });

        return schedule;
    }
    
    async createWorkoutPlan(workoutPlan) {
        const fitnessCreateWorkoutPlanService = await this.Apperyio.getService("fitness2_create_workout_plan_service");
        const plan = await fitnessCreateWorkoutPlanService.execute({
            params: {
                userId: this.dataService.user._id,
                workoutPlan
            }
        }).toPromise();

        return plan;
    }
    
    async getWorkoutPlans() {
        const fitnessWorkoutPlansService = await this.Apperyio.getService("fitness2_workout_plans_service");
        const workoutPlans = await fitnessWorkoutPlansService.execute({
            params: {
                userId: this.dataService.user._id
            }
        }).toPromise();

        return workoutPlans;
    }
    
    async deleteWorkoutPlan(_id: string) {
        const fitnessDeleteWorkoutPlanService = await this.Apperyio.getService("fitness2_delete_workout_plan_service");
        const workoutPlan = await fitnessDeleteWorkoutPlanService.execute({
            params: {
                _id
            }
        }).toPromise();

        return workoutPlan;
    }
    
    async bookCourt(courtId, date) {
        const fitnessBookCourtService = await this.Apperyio.getService("fitness2_book_court_service");
        const court = await fitnessBookCourtService.execute({
            data: {
                courtId,
                date
            },
            params: {
                userId: this.dataService.user._id
            }
        }).toPromise();
        return court;
    }

    async bookCourt1(dto) {
        const {slots, scheduleEntityId, courtId, date} = dto;
        interface IParams {
            scheduleEntityId?: string
        };
        interface IData {
            date?: string,
            courtId?: string,
            slots: any[]
        };
        
        let params:IParams = {};
        let data: IData = {slots};
        if(scheduleEntityId) params.scheduleEntityId = scheduleEntityId;
        if(courtId) data.courtId = courtId;
        if(date) data.date = date;
        console.log(data, params)
        const fitnessCourtBookService = await this.Apperyio.getService("fitness2_book_court_service");
        const scheduleEntity = await fitnessCourtBookService.execute({
            data,
            params
        }).toPromise();
        return scheduleEntity;
    }
    
    constructor(private Apperyio: ApperyioHelperService, private dataService: DataService) {}
}

/*
    Service class should be exported as ExportedClass
*/
export {
    BackendService as ExportedClass
};