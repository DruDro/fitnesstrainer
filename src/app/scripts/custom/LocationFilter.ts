import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'location-filter',
  template: `
    <ion-item class="ion-no-padding ion-no-margin ion-item-location" [ngClass]="{selected: selected}" color="white" lines="none" (click)="selectFilter.emit(location.info.type)">
        <ion-chip class="ion-no-margin ion-chip-location" outline="false" color="primary">
            <ion-icon name="type" [color]="selected ? 'light' : 'primary'" class="ion-no-margin" 
            src="assets/images/{{location.iconName}}.svg">
            </ion-icon>
        </ion-chip>
        <ion-label class="ion-label-location">
            <ion-text color="dark">
                <h5 class="ion-no-padding ion-no-margin">
                    {{location.info.type}}
                </h5>
            </ion-text>
            <ion-note>
                {{location.info.address}}
            </ion-note>
        </ion-label>
    </ion-item>
  `,
  styles: [`
    .ion-item-location {
        border-radius: 6px;
        border: 1px solid #A1A7B6;
        padding: 0 6px;
    }
    
    .ion-item-location.selected {
        background-color: var(--ion-color-primary);
        border-color: var(--ion-color-primary);
    }
    
    .ion-chip-location {
        padding: var(--half-padding);
        border-radius: 6px;
    }
    
    .selected .ion-chip-location {
        background-color: var(--ion-color-tertiary);
    }
    
    .ion-label-location {
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
class LocationFilterComponent {
    @Input() location: { iconName: string, info: { type: string, address: string } };
    @Input() selected: boolean;
    @Output() selectFilter = new EventEmitter<string>();

  constructor() {
    
  }

}

/*
    Component class should be exported as ExportedClass
*/
export { LocationFilterComponent as ExportedClass };
