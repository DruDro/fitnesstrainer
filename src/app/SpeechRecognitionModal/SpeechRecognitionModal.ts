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
    Platform
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
import {
    SpeechRecognition
} from '@ionic-native/speech-recognition/ngx';
import {
    timeout
} from 'rxjs/operators';
import {
    delay
} from 'rxjs/operators';
@Component({
    templateUrl: 'SpeechRecognitionModal.html',
    selector: 'page-speech-recognition-modal',
    styleUrls: ['SpeechRecognitionModal.scss']
})
export class SpeechRecognitionModal {
    public text: string = '';
    public ref: any;
    public time: number = 2500;
    public recognizer: string;
    public webSpeechRecognition: any;
    public window: any = window;
    public language: string = 'en-US';
    public options: any = {
        language: this.language,
        matches: 1,
        showPartial: true,
        showPopup: false
    };
    public deviceRecognize: any;
    public currentItem: any = null;
    public mappingData: any = {};
    async ionViewDidEnter() {
        this.ref = this.$aio_changeDetector;
        this.text = '';
        if (this.window.cordova) {
            console.log('device', this.platform.platforms())
            if (this.platform.is('ios')) {
                this.deviceRecognize = this.recognizeIOS;
            } else {
                this.deviceRecognize = this.recognizeWeb;
            }
            this.speechRecognition.isRecognitionAvailable().then((available: boolean) => {
                if (available) {
                    this.speechRecognition.hasPermission()
                        .then((hasPermission: boolean) => {
                            console.log('Permission', hasPermission)
                            if (!hasPermission) {
                                this.speechRecognition.requestPermission()
                                    .then(
                                        () => this.deviceRecognize(),
                                        () => console.log('Denied')
                                    );
                            } else {
                                this.deviceRecognize();
                            }
                        });
                } else {
                    this.recognizeWeb();
                }
            })
        } else {
            console.log('web')
            this.recognizeWeb();
        }
    }
    dismiss() {
        if (this.window.cordova && this.platform.is('ios')) {
            try {
                this.speechRecognition.stopListening();
            } catch (e) {
                console.log(e);
            }
        } else {
            try {
                this.webSpeechRecognition.stop();
            } catch (e) {
                console.log(e);
            }
        }
        this.modalCtrl.dismiss(this.text);
        this.ref.detectChanges();
    }
    recognizeAndroid() {
        const self = this;
        self.speechRecognition.startListening(this.options)
            .subscribe(
                (matches: string[]) => {
                    if (matches.length > 0) {
                        self.text = matches[0];
                        self.ref.detectChanges();
                        self.dismiss();
                    }
                },
                onTimeout => {
                    self.dismiss();
                    console.log(JSON.stringify(onTimeout));
                }
            );
    }
    recognizeIOS() {
        const self = this;
        try {
            // To prevent bug behaviour
            this.speechRecognition.stopListening();
        } catch (err) {
            console.log(err);
        }
        this.speechRecognition.startListening(this.options)
            .pipe(timeout(this.time))
            .subscribe(
                (matches: string[]) => {
                    if (matches.length > 0) {
                        self.text = matches[0];
                        self.ref.detectChanges();
                    }
                },
                error => {
                    self.speechRecognition.stopListening();
                    self.dismiss();
                    console.log('error', error);
                }
            );
    }
    recognizeWeb() {
        const self = this;
        const SpeechRecognition = this.window.SpeechRecognition || this.window.webkitSpeechRecognition;
        this.webSpeechRecognition = new SpeechRecognition();
        this.webSpeechRecognition.lang = this.language;
        this.webSpeechRecognition.continuous = true;
        this.webSpeechRecognition.interimResults = true;
        this.webSpeechRecognition.start();
        const recognitionObserve = function() {
            return new Observable(observer => {
                self.webSpeechRecognition.onresult = function(event) {
                    if (event.results.length > 0) {
                        let final_transcript = '';
                        let interim_transcript = '';
                        for (let i = event.resultIndex; i < event.results.length; ++i) {
                            if (event.results[i].isFinal) {
                                final_transcript += event.results[i][0].transcript;
                            } else {
                                interim_transcript += event.results[i][0].transcript;
                            }
                        }
                        self.ref.detectChanges();
                        observer.next(interim_transcript + final_transcript);
                    }
                };
            });
        };
        recognitionObserve().pipe(timeout(this.time)).subscribe(
            res => self.text = res as string,
            error => {
                self.webSpeechRecognition.stop();
                self.dismiss();
                console.log(error);
            });
        this.webSpeechRecognition.onerror = function(event) {
            setTimeout(() => {
                console.log(event);
                self.webSpeechRecognition.stop();
                self.dismiss();
            }, 1000)
        };
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public dataService: DataService, public modalCtrl: ModalController, public speechRecognition: SpeechRecognition, public platform: Platform) {}
}