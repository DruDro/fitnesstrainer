import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApperyioHelperService } from '../apperyio/apperyio_helper';
import { IonTabs } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
/*
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
class NavService {
    public tabs: IonTabs;
    public params: NavParams;
    constructor(private Apperyio: ApperyioHelperService) {}
}

/*
    Service class should be exported as ExportedClass
*/
export { NavService as ExportedClass };