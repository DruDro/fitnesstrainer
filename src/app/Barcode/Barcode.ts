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
@Component({
    templateUrl: 'Barcode.html',
    selector: 'page-barcode',
    styleUrls: ['Barcode.scss']
})
export class Barcode {
    public currentItem: any = null;
    public mappingData: any = {};
    addToWallet() {
        const passbook = window['Passbook'];
        if (!passbook) {
            return;
        }
        this.Apperyio.getController("LoadingController").create({
            message: 'Please wait...',
            spinner: 'crescent',
            duration: 2000
        }).then(loading => loading.present());
        const passUrl = `https://us-central1-fitness-5a353.cloudfunctions.net/createPass?firstName=${this.dataService.user.firstName}&lastName=${this.dataService.user.lastName}`;
        passbook.available((res) => {
            function onSuccess(pass, added) {
                this.Apperyio.getController("LoadingController").dismiss();
                console.log('Pass was shown to the user');
            }

            function onError(error) {
                this.Apperyio.getController("LoadingController").dismiss();
                alert('Could now show pass: ' + error);
            }
            passbook.downloadPass(passUrl, onSuccess, onError);
        });
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public dataService: DataService) {}
}