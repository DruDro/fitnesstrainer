import {
    Component,
    Output,
    EventEmitter,
    Input
} from '@angular/core';

/**
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
    selector: 'calendar',
    template: `
     <div class="change-date">
        <ion-text color="primary" (click)="datePicker.open()">
            Change date
        </ion-text>
        <div [hidden]="true">
            <ion-datetime #datePicker displayFormat="MMMM D YYYY" [min]="datePickerMinDate"
            [max]="datePickerMaxDate" (ionChange)="setDateByPicker($event.detail.value)" placeholder="Select Date">
            </ion-datetime>
        </div>
    </div>
    <ion-card class="calendar ion-text-center ion-no-margin white-background">
        <ion-grid class="">
            <ion-row class="ion-align-items-center ion-nowrap">
                <ion-col [hidden]="week[0].toISOString() == today.toISOString()"  class=" " size="auto">
                    <ion-icon color="primary" name="arrow-back" mode="ios" (click)="changeWeek({direction:4})"></ion-icon>
                </ion-col>
                <ion-col class=" ion-no-padding" >
                    <ion-grid (swipe)="changeWeek($event)" class="">
                        <ion-row class="ion-nowrap ion-align-items-center">
                            <ion-col *ngFor="let day of week" class=" ion-no-padding">
                                <ion-text color="medium" class="weekDay">
                                    {{day | date: 'EEEEE'}}
                                </ion-text>
                                <div class="date" [ngClass]="{'selected': selectedDates.includes(day)}" (click)="selectDate(day)">
                                    <ion-text color="dark" class="h6" [color]="selectedDates.includes(day) ? 'light': isPastDate(day) ? 'medium' : 'dark'">
                                        {{day | date: 'd'}}
                                    </ion-text>
                                </div>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </ion-col>
                <ion-col class=""  size="auto">
                    <ion-icon color="primary" name="arrow-forward" (click)="changeWeek({direction:2})"></ion-icon>
                </ion-col>
            </ion-row>
        </ion-grid>
    </ion-card>
  `,
    styles: [`
    .change-date {
        margin-bottom: 10px;
    }
    
    .calendar ion-text.weekDay {
        font-size: 18px;   
        font-weight: 600;
    }
    
    .calendar .date {
        height: 33px;
        width: 33px;
        border-radius: 50%;
        margin: 10px auto 0;
        padding: 7px;
    }
    
    .calendar .date.selected {
        background-color: var(--ion-color-primary);
    }
  `]
})
class CalendarComponent {
    today: Date = new Date();
    week: any[] = [];
    selectedDates: any[] = [];
    datePickerMinDate: string;
    datePickerMaxDate: string;

    @Output() filterByDates = new EventEmitter < any[] > ();
    @Input() daily: false;
    ngOnInit() {
        this.setWeek(this.today);
        this.setDatePickerDates();
    }

    selectDate(date) {
        if (this.isPastDate(date)) {
            return;
        }
        if(!this.daily){
            if (this.selectedDates.includes(date)) {
                const index = this.selectedDates.indexOf(date);
                this.selectedDates.splice(index, 1);
            } else {
                this.selectedDates.push(date);
            }
        } else {            
            this.selectedDates = [date];
        }

        this.filterByDates.emit(this.selectedDates);
    };

    setWeek(firstDate) {
        firstDate.setHours(0, 0, 0, 0);
        let daysCount = 6;
        this.selectedDates = [];
        this.week = [firstDate];
        while (daysCount) {
            var daysInMilliseconds = (7 - daysCount) * 24 * 60 * 60 * 1000;
            this.week.push(new Date(firstDate.getTime() + daysInMilliseconds));
            daysCount--;
        }
        const selectedDate = this.week.find(date => !this.isPastDate(date));
        this.selectDate(selectedDate);
    }

    changeWeek(event) {
        this.today.setHours(0, 0, 0, 0);
        const weekInMilliseconds = 7 * 24 * 60 * 60 * 1000;
        if (event.direction === 2) {
            const firstDate = new Date(this.week[0].getTime() + weekInMilliseconds);
            this.setWeek(firstDate);
        } else if (event.direction === 4 && this.week[0].getTime() > this.today.getTime()) {
            const firstDate = new Date(this.week[0].getTime() - weekInMilliseconds);
            this.setWeek(firstDate);
        }
    }

    setDatePickerDates() {
        const today = new Date();
        this.datePickerMinDate = today.toISOString();

        const datePickerMaxDate = new Date();
        datePickerMaxDate.setFullYear(this.today.getFullYear() + 1);
        this.datePickerMaxDate = datePickerMaxDate.toISOString();
    }

    setDateByPicker(value) {
        this.setWeek(new Date(value));
    }

    isPastDate(date) {
        this.today.setHours(0, 0, 0, 0);
        return date.getTime() < this.today.getTime();
    }
}

/*
    Component class should be exported as ExportedClass
*/
export {
    CalendarComponent as ExportedClass
};