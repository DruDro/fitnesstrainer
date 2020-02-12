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
    Platform
} from '@ionic/angular';
import {
    ExportedClass as DataService
} from '../scripts/custom/DataService';
import {
    Contacts
} from '@ionic-native/contacts/ngx';
import {
    WebView
} from '@ionic-native/ionic-webview/ngx';
import {
    Location
} from '@angular/common';
@Component({
    templateUrl: 'Referrals.html',
    selector: 'page-referrals',
    styleUrls: ['Referrals.scss']
})
export class Referrals {
    public contactsList: any = [];
    public isLoaded: boolean = false;
    public selectedPhoneNumbers: any = [];
    public currentItem: any = null;
    public mappingData: any = {};
    async loadContacts() {
        if (this.contacts && this.platform.is('cordova')) {
            this.contacts.find(['displayName', 'phoneNumbers', 'photos'], {
                    filter: "",
                    multiple: true,
                    hasPhoneNumber: true,
                    desiredFields: ['displayName', 'name', 'nickname', 'phoneNumbers', 'photos']
                })
                .then(
                    (value) => {
                        this.contactsList = [];
                        value.forEach(c => {
                            let contactStr = `contact item: formatted ${c.formatted}, photos ${c.photos && c.photos.length ? c.photos[0] : ''}\n`;
                            c.avatar = this.webView.convertFileSrc(c.photos ? c.photos[0].value : '')
                            c.phoneNumber = c.phoneNumbers && c.phoneNumbers.length ? c.phoneNumbers[0].value : '-';
                            c.displayName = c.displayName ? c.displayName : (c.name ? c.name.formatted : c.nickname);
                            this.contactsList.push(c);
                            console.log(contactStr);
                        });
                    },
                    (error) => {
                        console.log(`contacts error ${error}`);
                    }
                );
        }
    }
    async ionViewWillEnter() {
        if (this.isLoaded) {
            return;
        }
        await this.loadContacts();
        if (!this.contactsList.lenght) {
            this.contactsList = [{
                    displayName: 'Marie Curi',
                    phoneNumber: '(212) 348-2626',
                    avatar: this.dataService.getFileUrlById('8d6f737d-33aa-42d5-a5f0-948ebf1f506a.contact1')
                }, {
                    displayName: 'Erica Xavier ',
                    phoneNumber: '(212) 348-3226',
                    avatar: this.dataService.getFileUrlById('7fdcdeb5-b95a-468b-b57a-e8d3049924a9.contact2')
                }, {
                    displayName: 'Eric Tibit',
                    phoneNumber: '(212) 548-3227',
                    avatar: this.dataService.getFileUrlById('b9c643b9-3b10-4922-8407-dfba1692abf6.contact3')
                }, {
                    displayName: 'Erlisabet Hoke',
                    phoneNumber: '(212) 768-3228',
                    avatar: this.dataService.getFileUrlById('e994cd28-0912-48c5-8444-f6e3cd93028f.contact4')
                }, {
                    displayName: 'Jessi Less',
                    phoneNumber: '(212) 768-3229',
                    avatar: this.dataService.getFileUrlById('f998414e-0727-4842-affc-250c1a670aac.contact5')
                }, {
                    displayName: 'Helen Tibit ',
                    phoneNumber: '(212) 787-0926',
                    avatar: this.dataService.getFileUrlById('8191ac70-836d-4df9-a5c5-ea7029e8dc06.contact6')
                }, {
                    displayName: 'Suzanna Hort ',
                    phoneNumber: '(212) 568-3786',
                    avatar: this.dataService.getFileUrlById('ad71037e-936f-4625-8181-d8c7a4714f0a.contact7')
                }, {
                    displayName: 'Suzi Jord ',
                    phoneNumber: '(212) 168-0220',
                    avatar: this.dataService.getFileUrlById('3d304505-4df0-42c7-aff9-6baf6b0419e7.contact8')
                }, {
                    displayName: 'Alex Medtow ',
                    phoneNumber: '(212) 608-3546',
                    avatar: this.dataService.getFileUrlById('b9c643b9-3b10-4922-8407-dfba1692abf6.contact3')
                }, {
                    displayName: 'Eric Tibit',
                    phoneNumber: '(212) 905-0225',
                    avatar: this.dataService.getFileUrlById('940b3dcf-839c-4c37-b110-8836d9e2c207.coach_3')
                }
            ]
        }
        this.isLoaded = true;
    }
    checkContact(phoneNumber) {
        const index = this.selectedPhoneNumbers.indexOf(phoneNumber);
        if (index !== -1) {
            this.selectedPhoneNumbers.splice(index, 1);
        } else {
            this.selectedPhoneNumbers.push(phoneNumber);
        }
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public contacts: Contacts, public dataService: DataService, public webView: WebView, public platform: Platform, public location: Location) {}
}