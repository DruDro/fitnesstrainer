import { Component, Input } from '@angular/core';
import {
    Workout
} from '../interfaces';
import {
    ExportedClass as DataService
} from '../custom/DataService';

/**
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'user-workout-card',
  template: `
       <ion-card class="ion-no-margin white-background user-workout-card">
        <ion-grid class="schedule-container-grid ion-no-padding">
            <ion-row align-items-center nowrap>
                <ion-col size="7" align-self-center text-left>
                    <ion-item class="ion-no-padding ion-no-margin" lines="none">
                        <ion-avatar class="{{color}}-border">
                            <ion-img alt="Image error" [src]="dataService.getFileUrlById(avatar)">
                            </ion-img>
                        </ion-avatar>
                        <ion-label class="h3 ion-no-margin {{color}}-label">
                            {{this.workout?.workoutType.name}}
                        </ion-label>
                    </ion-item>
                </ion-col>
                <ion-col size="5" align-self-center text-right no-padding class="class-info">
                    <ion-text color="dark">
                        <h4 class="ion-no-padding ion-no-margin">
                            {{this.workout?.date | date: 'M/d/yy'}}
                        </h4>
                    </ion-text>
                    <ion-note>
                        {{this.workout?.place}}
                    </ion-note>
                </ion-col>
            </ion-row>
        </ion-grid>
    </ion-card>
  `,
  styles: [`
    ion-col ion-item ion-label {
        margin-left: 12px;
    }
    
    .user-workout-card {
        padding: 5px;
    }
    
    .user-workout-card ion-avatar {
        height: 40px;
        width: 40px;
        padding: 2px;
    }
    
    .user-workout-card ion-avatar.blue-border {
        border: 2px solid #557DDE;
    }
    
    .user-workout-card ion-avatar.green-border {
        border: 2px solid #30D2B4;
    }
    
    .user-workout-card ion-avatar.red-border {
        border: 2px solid #fa3c67;
    }
    
    .blue-label {
        color: #557DDE;
    }
    
    .green-label {
        color: #30D2B4;
    }
    
    .red-label {
        color: #fa3c67;
    }
  `]
})
class UserWorkoutCardComponent {
    @Input() workout: Workout;
    @Input() avatar: string;
    @Input() color: string;
    
    constructor(public dataService: DataService) {}
}

/*
    Component class should be exported as ExportedClass
*/
export { UserWorkoutCardComponent as ExportedClass };
