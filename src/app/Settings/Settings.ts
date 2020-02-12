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
@Component({
    templateUrl: 'Settings.html',
    selector: 'page-settings',
    styleUrls: ['Settings.scss']
})
export class Settings {
    public version: string = this.Apperyio.config.get("Settings.version");
    public currentItem: any = null;
    public mappingData: any = {};
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef) {}
}