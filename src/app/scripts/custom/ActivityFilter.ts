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
  selector: 'activity-filter',
  template: `
    <ion-item class="ion-no-padding ion-no-margin" lines="none" [ngClass]="{selected: selected}" (click)="selectFilter.emit(activity._id)">
        <div>
            <div class='activity-chip'>
                <ion-icon name="mail" class="ion-no-margin" [color]="selected ? 'light' : 'medium'"
                    src="assets/images/{{activity.icon}}.svg">
                </ion-icon>
            </div>
            <ion-note color="dark" class="ion-no-margin">
                {{activity.name}}
            </ion-note>
        </div>
    </ion-item>
  `,
  styles: [`
    .activity-chip {
        height: 45px;
        width: 45px;
        border: 1px solid #A1A7B6;
        border-radius: 6px;
        padding: 11px;
    }
    
    .selected .activity-chip {
        background-color: var(--ion-color-primary);
        border-color: var(--ion-color-primary);
    }
    
    ion-icon {
        font-size: 23px;
    }
    
    ion-note {
        font-weight: 600;
    }
    
    .selected ion-note {
        color: var(--ion-color-primary);
    }
    
    ion-item div {
        text-align: center;
    }
    
    ion-item {
        --ion-safe-area-right: 0;
    }
  `]
})
class ActivityFilterComponent {
    @Input() activity: any;
    @Input() selected: boolean;
    @Output() selectFilter = new EventEmitter<string>();
    
  constructor(public dataService: DataService) {

  }

}

/*
    Component class should be exported as ExportedClass
*/
export { ActivityFilterComponent as ExportedClass };
