import {
    NgModule
} from '@angular/core';
import {
    BrowserModule
} from '@angular/platform-browser';
import {
    FormsModule
} from '@angular/forms';
import {
    RouterModule
} from '@angular/router';
import {
    HttpClientModule
} from '@angular/common/http';
import {
    IonicModule
} from '@ionic/angular';
import {
    IonicStorageModule
} from '@ionic/storage';
import {
    ApperyioModule
} from "./scripts/apperyio/apperyio.module";
import {
    PipesModule
} from './scripts/pipes.module';
import {
    DirectivesModule
} from './scripts/directives.module';
import {
    ComponentsModule
} from './scripts/components.module';
import {
    CustomModulesModule
} from './scripts/custom-modules.module';
import {
    app
} from './app';
import {
    AppRoutingModule
} from './app-routing.module';
import {
    SpeechRecognitionModal
} from './SpeechRecognitionModal/SpeechRecognitionModal';
import {
    SavedWorkoutModal
} from './SavedWorkoutModal/SavedWorkoutModal';
import {
    DirectionsDetailsModal
} from './DirectionsDetailsModal/DirectionsDetailsModal';
import {
    ScheduleNavigationModal
} from './ScheduleNavigationModal/ScheduleNavigationModal';
import {
    ScheduleFilterModal
} from './ScheduleFilterModal/ScheduleFilterModal';
import {
    ExportedClass as ContactsService
} from './scripts/custom/ContactsService';
import {
    ExportedClass as abc_chatbot
} from './scripts/services/abc_chatbot';
import {
    ExportedClass as fitness2_available_workouts_service
} from './scripts/services/fitness2_available_workouts_service';
import {
    ExportedClass as fitness2_book_camp_service
} from './scripts/services/fitness2_book_camp_service';
import {
    ExportedClass as fitness2_book_court_service
} from './scripts/services/fitness2_book_court_service';
import {
    ExportedClass as fitness2_book_workout_service
} from './scripts/services/fitness2_book_workout_service';
import {
    ExportedClass as fitness2_camp_service
} from './scripts/services/fitness2_camp_service';
import {
    ExportedClass as fitness2_camps_service
} from './scripts/services/fitness2_camps_service';
import {
    ExportedClass as fitness2_court_schedule_service
} from './scripts/services/fitness2_court_schedule_service';
import {
    ExportedClass as fitness2_courts_service
} from './scripts/services/fitness2_courts_service';
import {
    ExportedClass as fitness2_create_workout_plan_service
} from './scripts/services/fitness2_create_workout_plan_service';
import {
    ExportedClass as fitness2_family_users_service
} from './scripts/services/fitness2_family_users_service';
import {
    ExportedClass as fitness2_family_workouts_service
} from './scripts/services/fitness2_family_workouts_service';
import {
    ExportedClass as fitness2_locations_service
} from './scripts/services/fitness2_locations_service';
import {
    ExportedClass as fitness2_next_workout_service
} from './scripts/services/fitness2_next_workout_service';
import {
    ExportedClass as fitness2_trainer_service
} from './scripts/services/fitness2_trainer_service';
import {
    ExportedClass as fitness2_trainers_service
} from './scripts/services/fitness2_trainers_service';
import {
    ExportedClass as fitness2_user_service
} from './scripts/services/fitness2_user_service';
import {
    ExportedClass as fitness2_users_service
} from './scripts/services/fitness2_users_service';
import {
    ExportedClass as fitness2_workout_plans_service
} from './scripts/services/fitness2_workout_plans_service';
import {
    ExportedClass as fitness2_workout_types_service
} from './scripts/services/fitness2_workout_types_service';
import {
    ExportedClass as fitness2_login_service
} from './scripts/services/fitness2_login_service';
import {
    ExportedClass as fitness2_delete_workout_plan_service
} from './scripts/services/fitness2_delete_workout_plan_service';
import {
    ExportedClass as WorkoutPlanService
} from './scripts/custom/WorkoutPlanService';
import {
    ExportedClass as NavService
} from './scripts/custom/NavService';
import {
    ExportedClass as SubscriptionService
} from './scripts/custom/SubscriptionService';
import {
    ExportedClass as DataService
} from './scripts/custom/DataService';
import {
    ExportedClass as BackendService
} from './scripts/custom/BackendService';
import {
    ExportedClass as Utils
} from './scripts/custom/Utils';
import {
    ExportedClass as GroupChatService
} from './scripts/custom/GroupChatService';
import {
    Geolocation
} from '@ionic-native/geolocation/ngx';
import {
    Camera
} from '@ionic-native/camera/ngx';
import {
    Contacts
} from '@ionic-native/contacts/ngx';
import {
    File
} from '@ionic-native/file/ngx';
import {
    WebView
} from '@ionic-native/ionic-webview/ngx';
import {
    Device
} from '@ionic-native/device/ngx';
import {
    SplashScreen
} from '@ionic-native/splash-screen/ngx';
import {
    StatusBar
} from '@ionic-native/status-bar/ngx';
import {
    Keyboard
} from '@ionic-native/keyboard/ngx';
import {
    SpeechRecognition
} from '@ionic-native/speech-recognition/ngx';
import {
    HealthKit
} from '@ionic-native/health-kit/ngx';
import {
    FingerprintAIO
} from '@ionic-native/fingerprint-aio/ngx';
import {
    AgmCoreModule
} from '@agm/core';
import {
    AngularFireModule
} from '@angular/fire';
import {
    AngularFirestoreModule
} from '@angular/fire/firestore';
@NgModule({
    declarations: [
        app, SpeechRecognitionModal, SavedWorkoutModal, DirectionsDetailsModal, ScheduleNavigationModal, ScheduleFilterModal
    ],
    imports: [
        BrowserModule,
        FormsModule,
        IonicModule.forRoot(),
        HttpClientModule,
        ApperyioModule,
        PipesModule,
        DirectivesModule,
        ComponentsModule,
        CustomModulesModule,
        IonicStorageModule.forRoot(), AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCveBG14ui8yFCKlDqRAWfl7SvLA5LYnzo',
            libraries: ['directions']
        }),
        AngularFireModule.initializeApp({
            apiKey: "AIzaSyAG9QMVVFHvdyimF5PsH8LmvfoCi4ML-qA",
            authDomain: "fitness-2-5614c.firebaseapp.com",
            databaseURL: "https://fitness-2-5614c.firebaseio.com",
            projectId: "fitness-2-5614c",
            storageBucket: "fitness-2-5614c.appspot.com",
            messagingSenderId: "484841443308",
            appId: "1:484841443308:web:00aae478e28a6c3dbdbac9",
            measurementId: "G-W7RMWDS90V"
        }),
        AngularFirestoreModule,
        AppRoutingModule
    ],
    bootstrap: [
        app
    ],
    entryComponents: [
        //app
        SpeechRecognitionModal, SavedWorkoutModal, DirectionsDetailsModal, ScheduleNavigationModal, ScheduleFilterModal
    ],
    providers: [
        StatusBar,
        SplashScreen,
        WebView,
        Device,
        Keyboard,
        Geolocation,
        Camera,
        Contacts,
        File,
        ContactsService,
        abc_chatbot,
        fitness2_available_workouts_service,
        fitness2_book_camp_service,
        fitness2_book_court_service,
        fitness2_book_workout_service,
        fitness2_camp_service,
        fitness2_camps_service,
        fitness2_court_schedule_service,
        fitness2_courts_service,
        fitness2_create_workout_plan_service,
        fitness2_family_users_service,
        fitness2_family_workouts_service,
        fitness2_locations_service,
        fitness2_next_workout_service,
        fitness2_trainer_service,
        fitness2_trainers_service,
        fitness2_user_service,
        fitness2_users_service,
        fitness2_workout_plans_service,
        fitness2_workout_types_service,
        fitness2_login_service,
        fitness2_delete_workout_plan_service,
        WorkoutPlanService,
        NavService,
        SubscriptionService,
        DataService,
        BackendService,
        Utils,
        GroupChatService,
        SpeechRecognition,
        HealthKit,
        FingerprintAIO
    ]
})
export class AppModule {}