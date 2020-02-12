import { Component, Input } from '@angular/core';
import {
    ExportedClass as DataService
} from '../custom/DataService';
import {
    ExportedClass as WorkoutPlanService
} from '../custom/WorkoutPlanService';
import {
    ApperyioHelperService
} from '../apperyio/apperyio_helper';

/**
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'plan-activity',
  template: `
    <ion-grid class="activity-container-grid ion-no-padding">
        <ion-row align-items-cesnter nowrap  class="workout-top-row">
            <ion-col size="7" align-self-center text-left>
                <ion-item class="ion-no-padding ion-no-margin" lines="none">
                    <ion-chip class="ion-no-margin ion-chip-activity" outline="false" color="primary">
                        <ion-icon name="mail" color="primary" class="ion-no-margin" 
                        src="assets/images/{{workout?.workoutType.icon}}.svg">
                        </ion-icon>
                    </ion-chip>
                    <ion-label color="primary" class="h3 ion-no-margin">
                        {{workout?.workoutType.name}}
                    </ion-label>
                </ion-item>
            </ion-col>
            <ion-col *ngIf="workout?.time" size="5" align-self-center text-right no-padding class="class-info">
                <ion-text color="dark">
                    <h4 class="ion-no-padding ion-no-margin">
                        {{workout?.time}}
                    </h4>
                </ion-text>
                <ion-note>
                    {{workout?.days}}
                </ion-note>
            </ion-col>
            <ion-col *ngIf="!workout?.time" size="5" align-self-center text-end>
                <ion-chip class="ion-no-margin ion-chip-add-btn" outline="false" color="primary" (click)="selectTime(workout?.workoutType._id)">
                    <ion-label class="h7" color="primary">
                        ADD TIME
                    </ion-label>
                </ion-chip>
            </ion-col>
        </ion-row>
        <ion-row align-items-center>
            <ion-col size="7" align-self-center>
                <ion-item class="ion-no-padding" lines="none">
                    <ion-avatar *ngIf="workout?.trainer" >
                        <ion-img alt="Image error" [src]="dataService.getFileUrlById(workout?.trainer.avatar)">
                        </ion-img>
                    </ion-avatar>
                    <ion-chip *ngIf="!workout?.trainer"  class="ion-no-margin ion-chip-no-coach" outline="false" color="primary">
                        <ion-icon color="primary" class="ion-no-margin" name="people"></ion-icon>
                    </ion-chip>
                    <ion-label>
                        <div *ngIf="workout?.trainer">
                            <ion-text color="dark">
                                <h5 class="ion-no-padding ion-no-margin" >
                                    {{workout?.trainer.firstName}} {{workout?.trainer.lastName}}
                                </h5>
                            </ion-text>
                            <ion-note>
                                {{workout?.trainer.position}}
                            </ion-note>
                        </div>
                            <h3 class="ion-no-padding ion-no-margin" *ngIf="!workout?.trainer">
                                Coach
                            </h3>
                    </ion-label>
                </ion-item>
            </ion-col>
            <ion-col size="5" *ngIf="!workout?.trainer" align-self-center text-end>
                <ion-chip class="ion-no-margin ion-chip-add-btn" outline="false" color="primary" (click)="selectCoach(workout?.workoutType._id)">
                    <ion-label class="h7" color="primary">
                        ADD COACH
                    </ion-label>
                </ion-chip>
            </ion-col>
        </ion-row>
    </ion-grid>
  `,
  styles: [`
    .activity-container-grid {
        --ion-grid-column-padding: 0px;
    }
    
    ion-col ion-item ion-label {
        margin-left: 12px;
    }
    
    .ion-chip-activity {
        padding: var(--half-padding);
        border-radius: 6px;
    }
    
    .ion-chip-no-coach {
        height: 32px;
        width: 32px;
        border-radius: 50%;
        padding: 6px;
    }
    
    .ion-chip-add-btn {
        padding: 12px 24px;
    }
  `]
})
class PlanActivityComponent {
    @Input() workout: any; 
        constructor(public planService: WorkoutPlanService, public dataService: DataService, private Apperyio: ApperyioHelperService) {
    }
    selectTime(workoutType: string){
        this.planService.selectActivity(workoutType);
        this.Apperyio.navigateTo(`home/Schedule/planselecttime`)
    }
    selectCoach(workoutType: string){
        this.planService.selectActivity(workoutType);
        this.Apperyio.navigateTo(`home/Schedule/planselectcoach`)
    }
}

/*
    Component class should be exported as ExportedClass
*/
export { PlanActivityComponent as ExportedClass };
