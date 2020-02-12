import {
    Injectable
} from '@angular/core';
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
@Injectable()
export class ApperyioNativeHelperService {
    public audioinput;
    constructor(
        public webView: WebView, public device: Device, public splashScreen: SplashScreen, public statusBar: StatusBar, public keyboard: Keyboard, public geolocation: Geolocation, public camera: Camera, public contacts: Contacts, public file: File
    ) {
        this.audioinput = (window as any).audioinput;
    }
};