import {
    HttpClient,
    HttpParams
} from '@angular/common/http';
import {
    Injectable
} from '@angular/core';
import {
    ApperyioHelperService
} from '../apperyio/apperyio_helper';
import {
    User,
    Org,
    Workout
} from '../interfaces';
/*
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
class DataService {
    public user: User = {} as User;
    public trainer: any;
    public org: Org = {} as Org;
    public isAndroid: Boolean;
    public isIos: Boolean;
    public appleWatch;

    public setUserInfo = function(user) {
        if (!user) {
            return;
        }

        this.user = {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            org: user.org,
            regDate: new Date(user.regDate.$date),
            avatar: user.avatar,
            location: user.location
        }

        if (user.org) {
            this.updateOrg(user.org);
        }
    }

    public updateOrg = function(org) {
        this.org = {
            id: org._id,
            name: org.name,
            colorTheme: org.colorTheme,
            ad: org.ad
        }
    }

    public getFullUserName = function() {
        return `${this.user.firstName} ${this.user.lastName}`;
    }

    public getFileUrlById = function(id) {
        return `https://api.appery.io/rest/1/db/files/5d6951182e22d7186fa77060/${id}.png`;
    }

    public getFileUrlByName = function(name) {
        return `https://api.appery.io/rest/1/db/files/5d6951182e22d7186fa77060/${name}`;
    }
    
    public sendMessageToAppleWatch(message) {
        if(!this.appleWatch) {
            return;
        }
        this.appleWatch.sendMessage({
            message: message,
            command: ''
        }, this.sendAWMessageSuccess, this.sendAWMessageFailure);
    }
    
    sendAWMessageFailure(message) {
        console.log(`Error: ${message}`);
    }
    
    sendAWMessageSuccess() {
        console.log('Message was sent to AppleWatch!');
    }

    public getWorkoutMessage = function(w: Workout) {
        if (!w) {
            return '';
        }
        return String('Your next workout ' + w.workoutType.name + ' will be at ' + w.time + ' in ' + w.place);
    }
    
    public logout() {
        this.user = {} as User;
        this.org = {} as Org;
        this.isAndroid = undefined;
        this.isIos = undefined;
        //TODO clear 
        //this.Apperyio.config.add('Settings.sessionToken', null);
        //this.Apperyio.config.add('Settings.user_id', null);
    }

    constructor(private Apperyio: ApperyioHelperService) {}
}


/*
    Service class should be exported as ExportedClass
*/
export {
    DataService as ExportedClass
};