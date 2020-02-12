import {
    Component,
    EventEmitter,
    Output,
    Input
} from '@angular/core';
import {
    ExportedClass as DataService
} from '../custom/DataService';
import {
    ApperyioHelperService
} from '../apperyio/apperyio_helper';

/**
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
    selector: 'court-schedule',
    template: `
    <ion-grid>
        <ion-row *ngFor="let slot of slots" class="slot-row">
            <ion-col class="ion-no-padding slot-time">
                <ion-note class="from" color="medium">
                    {{slot.startTime | date: 'h:mm a'}}
                </ion-note>
                <ion-note class="to" color="medium">
                    {{slot.endTime | date: 'h:mm a'}}
                </ion-note>
            </ion-col>
            <ion-col class="ion-no-padding">
                <ion-item-sliding #slidingItem [disabled]="(slot.isBooked && slot.isBooked.userId !== dataService.user._id) || !slot.isBooked">
                    <ion-item class="ion-no-padding" [color]="!slot.isBooked ? 'light' : (slot.isBooked && slot.isBooked.userId == dataService.user._id) ? 'primary': ''" (click)="handleSlotClick(slot, slidingItem)">
                        <ion-label>
                            <div class="ion-text-center" *ngIf="(slot.isBooked && slot.isBooked.userId !== dataService.user._id)">
                                <ion-text color="medium">
                                    Court is booked
                                </ion-text>
                            </div>
                            <div class="ion-text-center" *ngIf="!slot.isBooked">
                                <ion-text color="primary">
                                    Book court
                                </ion-text>
                            </div>
                            <div class="ion-text-center" *ngIf="(slot.isBooked && slot.isBooked.userId === dataService.user._id)">
                                <ion-icon name="checkmark" class="vertical-middle ">
                                </ion-icon>
                                <ion-text>
                                    Booked
                                </ion-text>
                            </div>
                        </ion-label>
                    </ion-item>
                    <ion-item-options side="end">
                        <ion-item-option color="danger" (click)="handleSlotClick(slot, slidingItem)">
                            Unbook
                        </ion-item-option>
                    </ion-item-options>
                </ion-item-sliding>
            </ion-col>
        </ion-row>
    </ion-grid>
  `,
    styles: [`

.slot-time {
	 flex: 0 0 50px;
	 position: relative;
}
 .slot-time .from, .slot-time .to {
	 position: absolute;
	 left: 0;
}
 .slot-time .from {
	 top: 0;
	 transform: translateY(-50%);
}
 .slot-time .to {
	 bottom: 0;
	 transform: translateY(50%);
	 display: none;
}
 .slot-row:last-of-type .to{
	 display: block;
}

    `]
})
class CourtScheduleComponent {
    @Input() slots: any[] = [];
    @Output() unbook = new EventEmitter();
    @Output() book = new EventEmitter();
    
    constructor(public dataService: DataService, private Apperyio: ApperyioHelperService) {}
    
    handleSlotClick(slot, slidingItem) {
        if (!slot.isBooked) {
            this.book.emit(slot)
        } else if (slot.isBooked && slot.isBooked.userId === this.dataService.user._id) {
            this.unbook.emit(slot);
            slidingItem.close();
        } else {
            return false
        }
    }
}

/*
    Component class should be exported as ExportedClass
*/
export {
    CourtScheduleComponent as ExportedClass
};