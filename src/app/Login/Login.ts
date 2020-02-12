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
    NgForm
} from '@angular/forms';
import {
    Router
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
    FingerprintAIO
} from '@ionic-native/fingerprint-aio/ngx';
import {
    UserLogin
} from '../scripts/interfaces';
@Component({
    templateUrl: 'Login.html',
    selector: 'page-login',
    styleUrls: ['Login.scss']
})
export class Login {
    public sessionToken: string;
    public id: string;
    public loginForm: NgForm;
    public userLogin: UserLogin = {
        username: 'trainer10@exadel.com',
        password: '1'
    };
    public firstOpen: boolean = true;
    public applewatch: any;
    public currentItem: any = null;
    public mappingData: any = {};
    async login() {
        // this.sendMsgToAppleWatch();
        this.Apperyio.getController("LoadingController").create({
            message: 'Please wait...',
            spinner: 'crescent',
            duration: 2000
        }).then(loading => loading.present());
        try {
            const res = await this.backendService.login(this.userLogin);
            console.log('loginSuccess userId:', res._id);
            this.loginSuccess(res)
        } catch (error) {
            console.log(error);
            alert("Login error: " + error);
            this.Apperyio.getController("LoadingController").dismiss();
        }
    }
    async loginSuccess(res) {
        this.Apperyio.config.add('Settings.sessionToken', res.sessionToken);
        this.Apperyio.config.add('Settings.user_id', res._id);
        console.log(res.sessionToken)
        this.id = res._id;
        this.sessionToken = res.sessionToken;
        try {
            await this.loadUser();
            await this.chatService.getChats();
            this.dataService.trainer = await this.backendService.getTrainer(this.id);
            console.log('workouts of trainer after login', this.dataService.trainer.workouts)
            this.router.navigate(['home'], {
                replaceUrl: true
            })
        } catch (e) {
            console.log(e);
            alert("Loading data error:" + e);
            this.Apperyio.getController("LoadingController").dismiss();
        }
    }
    async loadUser() {
        const user = await this.backendService.getUserInfo(this.id);
        console.log('Loaded user', user);
        this.dataService.setUserInfo(user);
    }
    connectWithAppleWatch() {
        this.applewatch = window['WatchConnectivity'];
        console.log('WatchConnectivity plugin: ', window['WatchConnectivity']);
        if (!this.applewatch) {
            return;
        }
        this.applewatch.init(() => {
            //alert('initWatchConnectivitySuccess');
            // this.applewatchConnectivity.messageReceiver(this.receiveConnectivityMessageSuccess, this.failure);
            this.dataService.appleWatch = this.applewatch;
            setTimeout(() => {
                //alert('sendMsg to Watch in 5 min after start');
                this.sendMsgToAppleWatch();
            }, 300000);
        }, this.sendAWMessageFailure);
    }
    sendMsgToAppleWatch() {
        if (!this.applewatch) {
            return;
        }
        const message = "You have a boxing class today at 7pm. Don't forget your gloves";
        this.dataService.sendMessageToAppleWatch(message);
        // this.applewatch.sendMessage({
        //     message: message,
        //     command: ''
        // }, this.sendAWMessageSuccess, this.sendAWMessageFailure);
    }
    sendAWMessageFailure(message) {
        console.log(`Error: ${message}`);
    }
    sendAWMessageSuccess() {
        console.log('Message was sent to AppleWatch!!');
    }
    async ionViewWillEnter() {
        if (!this.firstOpen) {
            return;
        }
        try {
            this.connectWithAppleWatch();
            const result = await this.faio.isAvailable()
            console.log(result);
            await this.faio.show({
                description: "Biometric login"
            });
            this.login();
        } catch (e) {
            console.log(e);
        }
        //this.login();
        this.firstOpen = false;
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public dataService: DataService, public faio: FingerprintAIO, public backendService: BackendService, public chatService: GroupChatService, public router: Router) {}
}