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
    NavParams
} from '@ionic/angular';
import {
    ViewChild
} from '@angular/core';
import {
    IonTabs
} from '@ionic/angular';
@Component({
    templateUrl: 'Root.html',
    selector: 'page-root',
    styleUrls: ['Root.scss']
})
export class Root {
    @ViewChild(IonTabs, {
        static: false
    }) public tabs: IonTabs;
    public currentItem: any = null;
    public mappingData: any = {};
    ionViewWillEnter() {
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef) {}
}