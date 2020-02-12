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
    ExportedClass as BackendService
} from '../scripts/custom/BackendService';
import {
    ExportedClass as WorkoutPlanService
} from '../scripts/custom/WorkoutPlanService';
@Component({
    templateUrl: 'PlanSelectCoach.html',
    selector: 'page-plan-select-coach',
    styleUrls: ['PlanSelectCoach.scss']
})
export class PlanSelectCoach {
    public coaches: any = [];
    public selectedCoach: any;
    public currentItem: any = null;
    public mappingData: any = {};
    async ionViewWillEnter() {
        this.coaches = await this.backendService.getTrainers();
    }
    selectCoach(coach) {
        this.selectedCoach = coach;
    }
    save() {
        this.planService.setTrainer(this.selectedCoach);
        this.Apperyio.navigateTo(`home/Schedule/plancreateworkouts`);
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public backendService: BackendService, public dataService: DataService, public planService: WorkoutPlanService) {}
}