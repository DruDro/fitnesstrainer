import {
    Component, Input, Output, EventEmitter
} from '@angular/core';
import {
    CommonModule
} from '@angular/common';
import {
    ExportedClass as DataService
} from '../custom/DataService';

/**
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
    selector: 'user-list-item',
    template: `
    <ion-item *ngIf="this.user" class="gray-background" (click)="selectUser.emit(user)">
        <ion-avatar slot="start" [ngClass]="{'favourite': favourite}">
            <ion-img alt="No Avatar" [src]="dataService.getFileUrlById(user[this.avatarKey])">
            </ion-img>
        </ion-avatar>
        <ion-label>
            <ion-text>
                <h4>
                    {{user['firstName']}} {{user['lastName']}}
                </h4>
            </ion-text>
            <ion-note>
                {{user[this.noteKey]}}
            </ion-note>
        </ion-label>
        <ion-icon name="star" slot="end" color="warning" *ngIf="favourite"></ion-icon>
        <ion-icon name="checkmark-circle" slot="end" color="primary" *ngIf="selected"></ion-icon>
    </ion-item>
  `,
    styles: [`
        ion-avatar.favourite {
            width: 40px;
            height: 40px;
            padding: 2px;
            border: 2px solid #F2C94C;
        }
    `]
})
class UserListItemComponent {
    @Input() user: Object;
    @Input() noteKey: string;
    @Input() avatarKey: string;
    @Input() favourite: boolean = false;
    @Input() selected: boolean;
    
    @Output() selectUser = new EventEmitter<any>();
    
    constructor(public dataService: DataService) {}
    
}

/*
    Component class should be exported as ExportedClass
*/
export {
    UserListItemComponent as ExportedClass
};