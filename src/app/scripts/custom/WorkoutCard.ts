import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
    Workout
} from '../interfaces';
import {
    ExportedClass as DataService
} from '../custom/DataService';
import {
    ExportedClass as ChatService
} from '../custom/GroupChatService';
import {
    ApperyioHelperService
} from '../apperyio/apperyio_helper';
/**
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'workout-card',
  template: `
   <ion-card class="ion-padding ion-no-margin white-background">
        <ion-grid class="schedule-container-grid ion-no-padding">
            <ion-row align-items-cesnter nowrap  [ngClass]="{'workout-top-row': this.fullViewMode}">
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
                <ion-col size="5" align-self-center text-right no-padding class="class-info">
                    <ion-text color="dark">
                        <h4 *ngIf="!showDate" class="ion-no-padding ion-no-margin">
                            {{workout?.date | date: 'h:mm a'}}
                        </h4>
                        <h4 *ngIf="showDate" class="ion-no-padding ion-no-margin">
                            {{workout?.date | date: 'M/d/yy'}}
                        </h4>
                    </ion-text>
                    <ion-note>
                        {{workout?.place}}
                    </ion-note>
                </ion-col>
            </ion-row>
            <ion-row align-items-center *ngIf="this.fullViewMode">
                <ion-col size="{{this.saveAvailable ? 6 : 7}}" align-self-center>
                    <ion-item class="ion-no-padding" lines="none">
                        <ion-avatar>
                            <ion-img alt="Image error" [src]="dataService.getFileUrlById(workout?.trainer.avatar)">
                            </ion-img>
                        </ion-avatar>
                        <ion-label>
                            <ion-text color="dark">
                                <h5 class="ion-no-padding ion-no-margin">
                                    {{workout?.trainer.firstName}} {{workout?.trainer.lastName}}
                                </h5>
                            </ion-text>
                            <ion-note>
                                {{this.workout?.trainer.position}}
                            </ion-note>
                        </ion-label>
                    </ion-item>
                </ion-col>
                 <ion-col size="2" *ngIf="this.saveAvailable" align-self-center text-start>
                    <ion-chip  class="ion-no-margin ion-chip-activity" outline="false" color="primary" 
                    (click)="saveWorkout.emit(this.workout)">
                        <ion-icon name="save" color="primary" class="ion-no-margin">
                        </ion-icon>
                    </ion-chip>
                </ion-col>
                <ion-col size="{{this.saveAvailable ? 4 : 5}}" align-self-center text-end>
                    <ion-chip *ngIf="actionType === 'message'" class="ion-no-margin ion-chip-activity" (click)="createChat(this.workout?.trainer._id)" outline="false" color="primary">
                        <ion-icon name="mail" color="primary">
                        </ion-icon>
                        <ion-label  color="primary">
                            Message
                        </ion-label>
                    </ion-chip>
                   
                   <div class="book-button" *ngIf="actionType === 'book'" [ngClass]="{'selected': booked}" (click)="!booked && book.emit(workout._id)">
                        <ion-icon [hidden]="!booked" name="checkmark" color="light"></ion-icon>
                        <ion-text class="h7" [color]="booked ? 'light' : 'primary'">
                            {{ booked ? 'BOOKED' : 'BOOK' }}
                        </ion-text>
                    </div>
                </ion-col>
               
            </ion-row>
            
            <ion-row *ngIf="this.fullViewMode">
                <ion-col align-self-end text-center>
                    <a (click)="Apperyio.navigateTo('home/Profile/referrals')">
                    Refer a friend &amp; earn 250 points!
                    </a>
                </ion-col>
            </ion-row>
            
        </ion-grid>
    </ion-card>
  `,
  styles: [`
  
      .workout-top-row {
            border-bottom: 1px solid var(--ion-color-light);
            padding-bottom: 18px;
        }
        
        .schedule-container-grid {
            --ion-grid-column-padding: 0px;
        }
        
        ion-col ion-item ion-label {
            margin-left: 12px;
        }
        
        .ion-chip-message {
            padding: 7px 20px;
        }
        
        .ion-chip-activity {
            padding: var(--half-padding);
            border-radius: 6px;
        }
        
        .book-button {
            display: flex;
            background-color: var(--ion-color-light);
            border-radius: 24px;
            width: 100px;
            height: 32px;
            text-align: center;
            float: right;
        }
        
        .book-button.selected {
            background-color: var(--ion-color-primary);
        }
        
        .book-button.selected ion-text {
            margin: auto 0;
        }
        
        .book-button ion-text {
            margin: auto;
        }
        
        .book-button ion-icon {
            font-size: 32px;
            margin-left: 7px;
        }
    
    ` ]
})
class WorkoutCardComponent {
  @Input() workout: Workout;
  @Input() actionType: 'book' | 'message' = 'message';
  @Input() fullViewMode: boolean = true;
  @Input() saveAvailable: boolean;
  @Input() booked: boolean = false;
  @Input() showDate: boolean = false;
  @Output() saveWorkout = new EventEmitter<Workout>();
  @Output() book = new EventEmitter<string>();
   
    constructor(public dataService: DataService, private chatService: ChatService, public Apperyio: ApperyioHelperService) {

    }
    createChat(trainerId) {
        console.log('call to chatService')
        this.chatService.prepareChat(
                [
                    trainerId,
                    this.dataService.user._id
                ]
            )
            .then(() => {
                this.Apperyio.navigateTo('home/Home/chatsettings')
            })
    }

}


export { WorkoutCardComponent as ExportedClass };
