import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
    ExportedClass as DataService
} from '../custom/DataService';

/**
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'coach-filter',
  template: `
    <ion-item class="ion-no-padding ion-item-coach" [ngClass]="{selected: selected}" color="white" lines="none" (click)="selectFilter.emit(trainer._id)">
        <ion-avatar>
            <ion-img alt="Image error" [src]="dataService.getFileUrlById(trainer.avatar)">
            </ion-img>
        </ion-avatar>
        <ion-label class="ion-label-coach">
            <ion-text color="dark">
                <h5 class="ion-no-padding ion-no-margin">
                    {{trainer.firstName}} {{trainer.lastName}}
                </h5>
            </ion-text>
            <ion-note>
                {{trainerWorkoutTypes.join(', ')}}
            </ion-note>
        </ion-label>
    </ion-item>
  `,
  styles: [`
    .ion-item-coach {
        border-radius: 6px;
        border: 1px solid #A1A7B6;
        padding: 0 6px;
    }
    
    .ion-item-coach.selected {
        background-color: var(--ion-color-primary);
        border-color: var(--ion-color-primary);
    }
    
    .ion-label-coach {
        display: flex;
        flex-direction: column;
        margin: 0 0 0 10px;
    }
    
    .selected ion-text,
    .selected ion-note {
        color: #FFFFFF;
    }
  `]
})
class CoachFilterComponent {
    trainerWorkoutTypes: string[] = [];
    @Input() trainer: any;
    @Input() selected: boolean;
    @Output() selectFilter = new EventEmitter<string>();

  constructor(public dataService: DataService) {
    
  }
  
  ngOnInit() {
      this.trainerWorkoutTypes = this.trainer.workoutTypes.map(({ name }) => name);
  }

}

/*
    Component class should be exported as ExportedClass
*/
export { CoachFilterComponent as ExportedClass };
