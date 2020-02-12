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
    ModalController
} from '@ionic/angular';
import {
    Observable
} from 'rxjs/Observable';
import {
    ExportedClass as DataService
} from '../scripts/custom/DataService';
import {
    Input
} from '@angular/core';
enum EWorkoutActivityType {
    AmericanFootball = "American football",
        Archery = "Archery",
        AustralianFootball = "Australian football",
        Badminton = "Badminton",
        Barre = "Barre",
        Baseball = "Baseball",
        Basketball = "Basketball",
        Bowling = "Bowling",
        Boxing = "Boxing",
        Climbing = "Climbing",
        CoreTraining = "Core training",
        Cricket = "Cricket",
        CrossCountrySkiing = "CrossCountrySkiing",
        CrossTraining = "Cross training",
        Curling = "Curling",
        Cycling = "Cycling",
        Dance = "Dance",
        DownhillSkiing = "Downhill skiing",
        Elliptical = "Elliptical machine training",
        EquestrianSports = "Equestrian sports",
        Fencing = "Fencing",
        Fishing = "Fishing",
        Flexibility = "Flexibility",
        FunctionalStrengthTraining = "Functional strength training",
        Golf = "Golf",
        Gymnastics = "Gymnastics",
        Handball = "Handball",
        HandCycling = "Hand cycling",
        HighIntensityIntervalTraining = "High intensity interval training",
        Hiking = "Hiking",
        Hockey = "Hockey",
        Hunting = "Hunting",
        JumpRope = "Jump rope",
        Kickboxing = "Kickboxing",
        Lacrosse = "Lacrosse",
        MartialArts = "Martial arts",
        MindAndBody = "Mind and body training",
        MixedCardio = "MixedCardio",
        MixedMetabolicCardioTraining = "Mixed metabolic cardio training",
        Other = "Another kind of workout",
        PaddleSports = "Paddle sports",
        Pilates = "Pilates",
        Play = "Play",
        PreparationAndRecovery = "Preparation and recovery",
        Racquetball = "Racquetball",
        Rowing = "Rowing",
        Rugby = "Rugby",
        Running = "Running",
        Sailing = "Sailing",
        SkatingSports = "Skating sports",
        Snowboarding = "Snowboarding",
        SnowSports = "Snow sports",
        Soccer = "Soccer",
        Softball = "Softball",
        Squash = "Squash",
        StairClimbing = "Stair climbing",
        Stairs = "Stairs",
        StepTraining = "Step training",
        SurfingSports = "Surfing sports",
        Swimming = "Swimming",
        TableTennis = "Table tennis",
        TaiChi = "Tai Chi",
        Tennis = "Tennis",
        TrackAndField = "Track and field",
        TraditionalStrengthTraining = "Traditional strength training",
        Volleyball = "Volleyball",
        Walking = "Walking",
        WaterFitness = "Water fitness",
        WaterPolo = "Water polo",
        WaterSports = "Water sports",
        WheelchairRunPace = "WheelchairWalkPace",
        Wrestling = "Wrestling",
        Yoga = "Yoga"
}
@Component({
    templateUrl: 'SavedWorkoutModal.html',
    selector: 'page-saved-workout-modal',
    styleUrls: ['SavedWorkoutModal.scss']
})
export class SavedWorkoutModal {
    @Input() public workout: any;
    public mappedWorkout: any;
    public currentItem: any = null;
    public mappingData: any = {};
    async ionViewWillEnter() {
        const wo = {
            ...this.workout,
            distance: `${+this.workout.distance.toFixed(1)}${this.workout.distanceUnit}`,
            energy: `${+this.workout.energy.toFixed(0)}${this.workout.energyUnit}`,
            duration: `${(this.workout.duration / 60).toFixed(0)}min`,
            startDate: new Date(this.workout.startDate * 1000).toLocaleString(),
            activityType: EWorkoutActivityType[this.workout.activityType.substring(this.workout.activityType.lastIndexOf('HKWorkoutActivityType') + 'HKWorkoutActivityType'.length)]
        }
        this.mappedWorkout = wo;
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
    ngOnInit() {
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public dataService: DataService, public modalCtrl: ModalController) {}
}