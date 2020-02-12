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
    ActivatedRoute
} from '@angular/router';
import {
    ExportedClass as DataService
} from '../scripts/custom/DataService';
import {
    ExportedClass as BackendService
} from '../scripts/custom/BackendService';
import {
    ExportedClass as GroupChatService
} from '../scripts/custom/GroupChatService';
import {
    Trainer
} from '../scripts/interfaces';
@Component({
    templateUrl: 'TrainerDetails.html',
    selector: 'page-trainer-details',
    styleUrls: ['TrainerDetails.scss']
})
export class TrainerDetails {
    public trainer: Trainer;
    public workouts: any;
    public bookedWorkouts: any = [];
    public id: string;
    public currentItem: any = null;
    public mappingData: any = {};
    createChat() {
        this.chatService.prepareChat(
                [
                    this.trainer._id,
                    this.dataService.user._id
                ]
            )
            .then(() => {
                this.Apperyio.navigateTo('home/Home/chatsettings')
            })
    }
    bookWorkout(id) {
        this.bookedWorkouts.push(id);
    }
    async ionViewWillEnter() {
        this.id = this.route.snapshot.params.id;
        this.Apperyio.getController("LoadingController").create({
            message: 'Please wait...',
            spinner: 'crescent',
            duration: 2000
        }).then(loading => loading.present());
        this.trainer = await this.backendService.getTrainer(this.id);
        this.Apperyio.getController("LoadingController").dismiss();
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public dataService: DataService, public chatService: GroupChatService, public backendService: BackendService, public route: ActivatedRoute) {}
}