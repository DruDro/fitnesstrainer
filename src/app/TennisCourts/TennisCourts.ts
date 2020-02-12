import {
    Component,
    ChangeDetectorRef
} from '@angular/core';
import {
    ApperyioHelperService
} from '../scripts/apperyio/apperyio_helper';
import {
    ApperyioMappingHelperService
} from '../scripts/apperyio/apperyio_mapping_helper';
import {
    LoadingController
} from '@ionic/angular';
import {
    ExportedClass as DataService
} from '../scripts/custom/DataService';
import {
    ExportedClass as BackendService
} from '../scripts/custom/BackendService';
import * as moment from 'moment'
@Component({
    templateUrl: 'TennisCourts.html',
    selector: 'page-tennis-courts',
    styleUrls: ['TennisCourts.scss']
})
export class TennisCourts {
    public typeToggle: boolean = true;
    public type: string = 'outdoor';
    public allCourts: any;
    public courts: string;
    public schedule: any;
    public date: string;
    public court: any;
    public rawCourts: any;
    public courtIndex: number;
    public loader: any;
    public currentItem: any = null;
    public mappingData: any = {};
    async ionViewWillEnter() {
        this.showLoader()
        this.date = moment().format('YYYY-MM-DD');
        this.rawCourts = await this.backendService.getCourts();
        this.hideLoader();
        this.getSchedule();
    }
    async getSchedule() {
        this.showLoader()
        this.schedule = await this.backendService.getCourtSchedule(this.date);
        this.getAllCourts();
    }
    async getAllCourts() {
        this.allCourts = this.mapCourts();
        this.filterCourts();
        this.hideLoader();
    }
    mapCourts() {
        return this.rawCourts.map(court => {
            const slots = [];
            var hourInMilliseconds = 60 * 60 * 1000;
            let time = new Date();
            let [startHours, startTime] = court.startTime.split(':');
            let [endHours, endTime] = court.endTime.split(':');
            time.setHours(startHours, startTime, 0, 0);
            slots.push({
                startTime: time,
                endTime: new Date(time.getTime() + hourInMilliseconds),
                isBooked: false
            });
            while (time.getHours() < endHours) {
                time = new Date(time.getTime() + hourInMilliseconds);
                const slot = {
                    startTime: time,
                    endTime: new Date(time.getTime() + hourInMilliseconds),
                    isBooked: this.isSlotBooked(time, court._id)
                };
                slots.push(slot);
            }
            court.slots = slots;
            return court;
        });
    }
    isSlotBooked(startTime, courtId) {
        const book = this.schedule.find(({
            court,
            date
        }) => {
            return court._id === courtId && date.getHours() === startTime.getHours();
        });
        return book && book.user ? {
            userId: book.user._id
        } : false;
    }
    filterCourts() {
        this.type = this.typeToggle ? 'outdoor' : 'indoor';
        this.courts = this.allCourts.filter(court => court.type === this.type);
        this.setCourt(0);
    }
    setDate(selectedDate) {
        this.date = moment(selectedDate).format('YYYY-MM-DD');
        if (this.rawCourts) this.getSchedule()
    }
    setCourt(courtIndex) {
        this.courtIndex = courtIndex;
        this.court = this.courts[courtIndex]
    }
    async showLoader() {
        this.Apperyio.getController("LoadingController").create({
            message: 'Please wait...',
            spinner: 'crescent',
            duration: 2000
        }).then(loading => loading.present());
    }
    hideLoader() {
        this.Apperyio.getController("LoadingController").dismiss();
    }
    async bookSlot(slot) {
        const date = new Date(this.date);
        date.setHours(slot.startTime.getHours(), slot.startTime.getMinutes(), 0, 0);
        const schedule = await this.backendService.bookCourt(this.court._id, date.getTime());
        this.court.slots.find(s => s.startTime === slot.startTime).isBooked = {
            userId: this.dataService.user._id
        }
    }
    async unbookSlot(slot) {
        const unbookPrmt = confirm('Do you really want to unbook the court?');
        if (unbookPrmt) {
            const date = new Date(this.date);
            date.setHours(slot.startTime.getHours(), slot.startTime.getMinutes(), 0, 0);
            const schedule = await this.backendService.bookCourt(this.court._id, date.getTime());
            this.court.slots.find(s => s.startTime === slot.startTime).isBooked = false;
        }
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public backendService: BackendService, public dataService: DataService, public loadingController: LoadingController) {}
    async html16Click__j_343(event ? , currentItem ? ) {
        /* Run TypeScript */
        this.Apperyio.showModal("ScheduleNavigationModal", {
                showBackdrop: true,
                backdropDismiss: true,
                cssClass: "filter",
                animated: true,
                keyboardClose: true
            })
            .then(modal => {
                modal.present();
                modal.onDidDismiss().then((dataReturned) => {
                    if (dataReturned.data) {
                        console.log(dataReturned)
                    }
                });
            });;
    }
}