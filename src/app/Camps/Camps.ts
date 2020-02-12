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
@Component({
    templateUrl: 'Camps.html',
    selector: 'page-camps',
    styleUrls: ['Camps.scss']
})
export class Camps {
    public terms: any;
    public campTerms: any = [];
    public currentItem: any = null;
    public mappingData: any = {};
    async ionViewWillEnter() {
        this.terms = [{
            number: 1,
            name: 'I',
            active: true
        }, {
            number: 2,
            name: 'II',
            active: false
        }, {
            number: 3,
            name: 'III',
            active: false
        }, {
            number: 4,
            name: 'IV',
            active: false
        }];
        this.getCampTerms(1);
    }
    async getCampTerms(term) {
        this.Apperyio.getController("LoadingController").create({
            message: 'Please wait...',
            spinner: 'crescent',
            duration: 2000
        }).then(loading => loading.present());
        this.campTerms = [];
        this.campTerms = await this.backendService.getCamps(term);
        this.Apperyio.getController("LoadingController").dismiss();
    }
    selectTerm(termName) {
        this.terms.forEach(term => {
            term.active = false;
        });
        const activeTerm = this.terms.find(term => term.name === termName);
        activeTerm.active = true;
        this.getCampTerms(termName);
    }
    goToCamp(campTermId) {
        this.Apperyio.navigateTo(`home/Schedule/camp/`, campTermId);
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public backendService: BackendService, public dataService: DataService) {}
    async html16Click__j_438(event ? , currentItem ? ) {
        /* Run TypeScript */
        this.Apperyio.showModal("ScheduleNavigationModal", {
                showBackdrop: true,
                backdropDismiss: true,
                cssClass: "filter",
                animated: true,
                keyboardClose: true
            })
            .then(modal => {
                modal.present();
                modal.onDidDismiss().then((dataReturned) => {
                    if (dataReturned.data) {
                        console.log(dataReturned)
                    }
                });
            });;
    }
}