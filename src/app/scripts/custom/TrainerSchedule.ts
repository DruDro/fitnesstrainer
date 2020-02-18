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
import * as moment from 'moment';

/**
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
    selector: 'trainer-schedule',
    template: `
    <ion-grid>
        <ion-row *ngFor="let slot of schedule" class="slot-row">
            <ion-col class="ion-no-padding slot-time">
                <ion-note class="from" color="medium">
                    {{slot?.startTime | date: 'h:mm a' }}
                </ion-note>
                <ion-note class="to" color="medium">
                    {{slot?.endTime | date: 'h:mm a'}}
                </ion-note>
            </ion-col>
            <ion-col class="ion-no-padding">
                <ion-item class="slot ion-no-padding" [lines]="slot.workout ? 'none':''" [color]="slot.workout ? 'light':''">
                    <ion-label *ngIf="slot.workout" class="ion-padding-horizontal ion-no-margin">
                        <ion-grid class="ion-no-padding ion-no-margin">
                            <ion-row class="ion-align-items-center ion-justify-content-between">
                                <ion-col size="auto" class="ion-no-padding">
                                    <ion-text class="h3 ion-no-padding" color="primary">{{slot.workout.workoutType.name}}</ion-text>
                                </ion-col>
                                <ion-col size="auto" class="ion-no-padding ">
                                    <ion-text class="h5 ion-no-padding" color="danger">{{slot.workout.place}}</ion-text>
                                </ion-col>
                                <ion-col size="auto" class="ion-no-padding ">
                                    <ion-text  class="h5 ion-no-padding" color="dark">{{slot.workout.users.length}}/10</ion-text>
                                </ion-col>
                            </ion-row>
                        </ion-grid>
                    </ion-label>
                </ion-item>
            </ion-col>
        </ion-row>
    </ion-grid>
  `,
    styles: [`
.slot{
    --border-color: var(--ion-color-light);
}
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
class TrainerScheduleComponent {
    @Input() workouts: any[] = [];
    @Input() date = new Date();
    private slots = [];
    public schedule = [];
    constructor(public dataService: DataService, private Apperyio: ApperyioHelperService) { }
    ngOnInit() {
    }
    buildSlots() {
        this.slots = [];
        const d = moment(this.date);
        for (let hour = 0; hour < 24; hour++) {
            const startTime = {
                hour,
                month: d.month(),
                year: d.year(),
                date: d.date()
            };
            const endTime = {
                hour: moment(hour, "h").add(1, 'hours').hour(),
                month: d.month(),
                year: d.year(),
                date: d.date()
            }
            this.slots.push(
                {
                    startTime: moment(startTime),
                    endTime: moment(endTime)
                }
            )
        }
        return Promise.resolve()
    }
    fillSlots() {
        this.schedule = this.slots.map((slot) => {
            this.workouts.forEach(wo => {
                if (moment(wo.date).format('h:mm A') == slot.startTime.format('h:mm A')) {
                    slot.workout = wo
                }
            })
            return slot
        })
    }
    ngOnChanges() {
        this.buildSlots().then(() => this.fillSlots());
    }
}

/*
    Component class should be exported as ExportedClass
*/
export {
    TrainerScheduleComponent as ExportedClass
};
