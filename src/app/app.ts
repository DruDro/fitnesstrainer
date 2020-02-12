import {
    Component,
    ChangeDetectorRef
} from '@angular/core';
import {
    ApperyioHelperService
} from './scripts/apperyio/apperyio_helper';
import {
    ApperyioMappingHelperService
} from './scripts/apperyio/apperyio_mapping_helper';
import {
    MenuController
} from '@ionic/angular';
import {
    NavController
} from '@ionic/angular';
import {
    Platform
} from '@ionic/angular';
import {
    ViewChild
} from '@angular/core';
import {
    SplashScreen
} from '@ionic-native/splash-screen/ngx';
import {
    StatusBar
} from '@ionic-native/status-bar/ngx';
import {
    ExportedClass as DataService
} from './scripts/custom/DataService';
import {
    HealthKit
} from '@ionic-native/health-kit/ngx';
import 'hammerjs';
@Component({
    templateUrl: 'app.html',
    selector: 'app-root',
    styleUrls: ['app.scss']
})
export class app {
    public currentItem: any = null;
    public mappingData: any = {};
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private menuCtrl: MenuController, public healthKit: HealthKit, public dataService: DataService) {
        // do not remove this code unless you know what you do
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            this.dataService.isAndroid = platform.is('android')
            this.dataService.isIos = platform.is('ios')
            console.log('platform ready, ', platform);
            console.log(`Platform is detected as ${this.dataService.isIos ? 'IOS' : (this.dataService.isAndroid ? 'Android': '')}`);
            document.addEventListener('backbutton', () => {
                console.log('back');
            })
        });
        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {
            console.log('deviceready', navigator);
        }
    }
    close() {
        this.menuCtrl.close();
    }
    logout() {
        this.dataService.logout();
        this.Apperyio.navigateTo('Login');
        this.menuCtrl.close();
    }
}