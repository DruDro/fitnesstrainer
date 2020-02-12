import { Injectable } from '@angular/core';
import _ from "lodash";
import { Observable } from "rxjs/Observable";
import { ApperyioHelperService } from '../apperyio/apperyio_helper';
import { EntityApiService } from '../apperyio/apperyio';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ExportedClass as DataService } from './DataService';

@Injectable()
class ContactsService {
    contacts: any[];
    
    getUserAvatar(userId) {
        const placeholder = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 426.667 426.667' xml:space='preserve'%3E%3Cstyle%3E .user %7B fill: var(--ion-color-primary) %7D %3C/style%3E%3Cg class='user'%3E%3Cg%3E%3Cpath d='M213.333,0C95.467,0,0,95.467,0,213.333s95.467,213.333,213.333,213.333S426.667,331.2,426.667,213.333S331.2,0,213.333,0 z M213.333,64c35.307,0,64,28.693,64,64c0,35.413-28.693,64-64,64s-64-28.587-64-64C149.333,92.693,178.027,64,213.333,64z M213.333,366.933c-53.44,0-100.373-27.307-128-68.693c0.533-42.347,85.44-65.707,128-65.707s127.36,23.36,128,65.707 C313.707,339.627,266.773,366.933,213.333,366.933z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A";
        const matchedUser = this.getUserById(userId);
        return matchedUser && matchedUser.avatar ? this.dataService.getFileUrlById(matchedUser.avatar) : placeholder;
    }
    
    getUserFullNameById(userId) {
        const user = this.getUserById(userId);
        return user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : `${user.first_name} ${user.last_name}`;
    }
    
    getUserById(userId) {
        return this.contacts.find(({ _id }) => _id === userId);
    }
    
    constructor(private Apperyio: ApperyioHelperService, private dataService: DataService) {}
}

/*
    Service class should be exported as ExportedClass
*/
export { ContactsService as ExportedClass };