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
    NavController
} from '@ionic/angular';
import {
    Injectable
} from '@angular/core';
import {
    ExportedClass as DataService
} from '../scripts/custom/DataService';
import {
    ExportedClass as WorkoutCard
} from '../scripts/custom/WorkoutCard';
import {
    ExportedClass as BackendService
} from '../scripts/custom/BackendService';
import {
    Inject
} from '@angular/core';
@Component({
    templateUrl: 'Home.html',
    selector: 'page-home',
    styleUrls: ['Home.scss']
})
export class Home {
    public COLOR_THEME_MAP: any = {
        2: 'red-theme',
        3: 'green-theme'
    };
    public adsList: any;
    public adsSlideOpts: any;
    public nextWorkout: any;
    public workouts: any = [];
    public availableWorkouts: any = [];
    public allWorkouts: any;
    public currentItem: any = null;
    public mappingData: any = {};
    public selectedDates: any = [];
    isShowWorkoutDate(workout) {
        return workout.date.toDateString() !== new Date().toDateString();
    }
    async ionViewWillEnter() {
        const themeIndex = this.dataService.org.colorTheme;
        const newColorScheme = this.COLOR_THEME_MAP[themeIndex];
        if (document && document.body) {
            document.body.className = newColorScheme ? newColorScheme : "";
            console.log('color scheme was updated to ', newColorScheme);
        }
        this.workouts = this.dataService.trainer.workouts;
        this.nextWorkout = await this.backendService.getNextWorkout();
        console.log(this.dataService.getWorkoutMessage(this.nextWorkout));
    }
    ionViewDidLeave() {
    }
    filterWorkoutsByDates(selectedDates) {
        this.selectedDates = selectedDates;
        const selectedDateStrings = selectedDates.map(date => date.toDateString());
        this.availableWorkouts = this.allWorkouts.filter(({
            date
        }) => {
            return selectedDateStrings.includes(date.toDateString());
        });
        this.workouts = this.availableWorkouts;
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public dataService: DataService, public backendService: BackendService, public navCtrl: NavController) {}
}
