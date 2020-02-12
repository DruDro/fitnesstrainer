import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
    selector: 'workout-plan',
    template: `
        <ion-card class="workout-plan-card ion-no-padding ion-no-margin white-background" >
            <ion-item-sliding #slidingItem>
                <ion-item class="ion-no-padding" lines="none">
                    <ion-grid class="ion-padding">
                        <ion-row>
                            <ion-col size="4">
                                <ion-avatar class="workout-plan-avatar">
                                    <ion-img alt="Image error" src="assets/images/activity.png">
                                    </ion-img>
                                </ion-avatar>
                            </ion-col>
                            <ion-col size="8" class="workout-plan-name">
                                <ion-text color="dark" class="h3">
                                    {{this.plan?.name}}
                                </ion-text>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col>
                                <div class="plan-activity-container" *ngFor="let activity of this.plan?.activities">
                                    <plan-activity [workout]="activity">
                                    </plan-activity>
                                </div>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </ion-item>
                <ion-item-options side="end">
                    <ion-item-option color="danger" (click)="deleteWorkoutPlan(slidingItem)">
                        Delete
                    </ion-item-option>
                </ion-item-options>
            </ion-item-sliding>
        </ion-card>
    `,
    styles: [`
        .workout-plan-card {
            margin-bottom: 16px;
        }
        
        .plan-activity-container:not(:last-child) {
            border-bottom: 1px solid var(--ion-color-light);
            margin-bottom: 10px;
        }
        
        .message {
            display: block;
        }
        
        .no-workouts-icon {
            font-size: 110px;
        }
        
        .workout-plan-avatar {
            height: 96px;
            width: 96px;
        }
        
        .workout-plan-name {
            padding-left: 15px;
        }
    `]
})
class WorkoutPlanComponent {

    @Input() plan: any;
    @Output() emitDelete = new EventEmitter();
    constructor() {    }
    
    deleteWorkoutPlan( slidingItem) {
        if (confirm("Do your really want to delete the workout plan?")) {
            this.emitDelete.emit(this.plan)
            slidingItem.close();
        }
    }
}

/*
    Component class should be exported as ExportedClass
*/
export {
    WorkoutPlanComponent as ExportedClass
};