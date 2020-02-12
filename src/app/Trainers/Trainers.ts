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
    ExportedClass as DataService
} from '../scripts/custom/DataService';
import {
    ExportedClass as UserListItem
} from '../scripts/custom/UserListItem';
import {
    ExportedClass as BackendService
} from '../scripts/custom/BackendService';
@Component({
    templateUrl: 'Trainers.html',
    selector: 'page-trainers',
    styleUrls: ['Trainers.scss']
})
export class Trainers {
    public coaches: any;
    public currentItem: any = null;
    public mappingData: any = {};
    openDetails(coach) {
        console.log('open coach details', coach);
        this.Apperyio.navigateTo("home/Home/trainer", coach._id);
    }
    getMockTrainers() {
        const trainers = [{
            name: 'Viktor Gray',
            position: 'Yoga master',
            workoutKey: 'Yoga',
            avatar: '7a5f3de8-4ea0-4537-bda4-1588a306ff68.coach_1'
        }, {
            name: 'Eric Xarier ',
            position: 'Run master',
            workoutKey: 'Run',
            avatar: '1bd318a5-b044-4f65-aeca-8b406ecc91fa.coach_2'
        }, {
            name: 'Jessi Less',
            position: 'Soccer master',
            workoutKey: 'Soccer',
            avatar: '940b3dcf-839c-4c37-b110-8836d9e2c207.coach_3'
        }, {
            name: 'Helen Tibit',
            position: 'Cycling master',
            workoutKey: 'Cycling',
            avatar: '8191ac70-836d-4df9-a5c5-ea7029e8dc06.contact6'
        }, {
            name: 'Erlisabet Hoke',
            position: 'Swimming master',
            workoutKey: 'Swimming',
            avatar: 'e994cd28-0912-48c5-8444-f6e3cd93028f.contact4'
        }, {
            name: 'Suzanna Hort',
            position: 'Athletics master',
            workoutKey: 'Athletics',
            avatar: 'ad71037e-936f-4625-8181-d8c7a4714f0a.contact7'
        }, {
            name: 'Erica Gard',
            position: 'Ping-pong master',
            workoutKey: 'PingPong',
            avatar: '3d304505-4df0-42c7-aff9-6baf6b0419e7.contact8'
        }, {
            name: 'Alex Medtow',
            position: 'Boxing master',
            workoutKey: 'Boxing',
            avatar: 'b9c643b9-3b10-4922-8407-dfba1692abf6.contact3'
        }]
        return trainers;
    }
    async ionViewWillEnter() {
        this.coaches = await this.backendService.getTrainers();
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public dataService: DataService, public backendService: BackendService) {}
}