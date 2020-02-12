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
    ToastController
} from '@ionic/angular';
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
    ExportedClass as ContactsService
} from '../scripts/custom/ContactsService';
@Component({
    templateUrl: 'Camp.html',
    selector: 'page-camp',
    styleUrls: ['Camp.scss']
})
export class Camp {
    public campTerm: any;
    public adsSlideOpts: any;
    public contacts: any = [];
    public bookedUsers: any = [];
    public campTermId: string;
    public currentItem: any = null;
    public mappingData: any = {};
    async ionViewWillEnter() {
        this.campTermId = this.route.snapshot.params.id;
        this.campTerm = await this.backendService.getCampTerm(this.campTermId);
        this.bookedUsers = this.campTerm.users || [];
        this.adsSlideOpts = {
            initialSlide: 0
        };
        this.backendService.getFamilyUsers().then(contacts => {
            this.contacts = contacts.map(c => {
                c.isChecked = this.bookedUsers.includes(c._id);
                return c;
            });
        });
    }
    async confirm() {
        this.Apperyio.getController("LoadingController").create({
            message: 'Please wait...',
            spinner: 'crescent',
            duration: 2000
        }).then(loading => loading.present());
        const updatedCampTerm = await this.backendService.bookCampTerm(
            this.campTerm._id,
            this.bookedUsers
        );
        this.Apperyio.getController("LoadingController").dismiss();
        const children = this.contacts.reduce((acc, child) => {
            if (this.bookedUsers.includes(child._id)) {
                acc.push(child.firstName + ' ' + child.lastName)
            }
            return acc
        }, []);
        const message = children.length ? `${children.join(", ")} signed up for term ${this.campTerm.term} at ${this.campTerm.camp.name}` : `Signed out from term ${this.campTerm.term} at ${this.campTerm.camp.name}`;
        const toast = await this.toaster.create({
            message,
            duration: 3000,
            position: 'middle',
            color: 'success',
            cssClass: 'confirm-message',
            buttons: [{
                text: '',
                role: 'cancel',
                icon: 'checkmark',
            }]
        });
        toast.present();
    }
    updateBookedUsers() {
        this.contacts.forEach(contact => {
            const bookedChildIndex = this.bookedUsers.indexOf(contact._id);
            if (contact.isChecked) {
                bookedChildIndex === -1 && this.bookedUsers.push(contact._id)
            } else {
                bookedChildIndex > -1 && this.bookedUsers.splice(bookedChildIndex, 1)
            }
        });
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public backendService: BackendService, public dataService: DataService, public contactsService: ContactsService, public route: ActivatedRoute, public toaster: ToastController) {}
}