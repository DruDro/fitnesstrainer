import {
    Component,
    Output,
    EventEmitter
} from '@angular/core';

/**
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
    selector: 'date-switcher',
    template: `
     <ion-card class="calendar change-date ion-no-margin white-background">
     <ion-card-content>
        <ion-grid class="ion-no-padding">
            <ion-row class="ion-align-items-center ion-justify-content-between">
                <ion-col [hidden]="date === today.toISOString()"  class=" ion-padding-end ion-no-padding" size="auto">
                    <ion-icon color="primary" name="arrow-back" (click)="prevDay()"></ion-icon>
                </ion-col>
                <ion-col class="date ion-no-padding" (click)="datePicker.open()" size="auto">
                    <ion-icon color="primary" name="calendar"  class="calendar-icon"></ion-icon>
                    <ion-text class="h4" >
                        {{date | date: 'EEEE, MMM d'}}
                    </ion-text>
                </ion-col>
                <ion-col class="ion-padding-start ion-no-padding"  size="auto">
                    <ion-icon color="primary" name="arrow-forward" (click)="nextDay()"></ion-icon>
                </ion-col>
            </ion-row>
        </ion-grid>
        <div [hidden]="true">
            <ion-datetime #datePicker displayFormat="MMMM D YYYY" [min]="datePickerMinDate"
            [max]="datePickerMaxDate" [(ngModel)]="date" (ionChange)="selectDate.emit(date)" placeholder="Select Date">
            </ion-datetime>
        </div>
        </ion-card-content>
    </ion-card>
  `,
    styles: [`
    
    .calendar .date {
        display:flex;
        align-items:center;
        margin: 0 auto;
    }
    .calendar .date .calendar-icon {
        margin:0 20px 0 auto;
    }
  `]
})
class DateSwitcher {
    today: Date = new Date();
    datePickerMinDate: string;
    datePickerMaxDate: string;
    date: string;
    @Output() selectDate = new EventEmitter < any > ();

    ngOnInit() {
        this.setDatePickerDates();
    }


    setDatePickerDates() {
        this.date = this.today.toISOString();
        this.datePickerMinDate = this.today.toISOString();

        const datePickerMaxDate = new Date();
        datePickerMaxDate.setFullYear(this.today.getFullYear() + 1);
        this.datePickerMaxDate = datePickerMaxDate.toISOString();
    }
    
    nextDay(){
        let date = new Date(this.date);
        date.setDate(date.getDate() + 1);
        this.date = date.toISOString()
    }
    
    prevDay(){
        let date = new Date(this.date);
        date.setDate(date.getDate() - 1);
        this.date = date.toISOString();
    }
}

/*
    Component class should be exported as ExportedClass
*/
export {
    DateSwitcher as ExportedClass
};