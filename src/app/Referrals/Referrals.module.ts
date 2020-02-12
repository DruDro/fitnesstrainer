import {
    NgModule
} from '@angular/core';
import {
    CommonModule
} from '@angular/common';
import {
    FormsModule
} from '@angular/forms';
import {
    RouterModule
} from '@angular/router';
import {
    IonicModule
} from '@ionic/angular';
import {
    Referrals
} from './Referrals';
import {
    PipesModule
} from '../scripts/pipes.module';
import {
    DirectivesModule
} from '../scripts/directives.module';
import {
    ComponentsModule
} from '../scripts/components.module';
import {
    CustomModulesModule
} from '../scripts/custom-modules.module';
import {
    Contacts
} from '@ionic-native/contacts/ngx';
import {
    WebView
} from '@ionic-native/ionic-webview/ngx';
@NgModule({
    declarations: [
        Referrals
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PipesModule,
        DirectivesModule,
        ComponentsModule,
        CustomModulesModule, RouterModule.forChild([{
            path: '',
            component: Referrals
        }])
    ],
    exports: [
        Referrals
    ],
    providers: [
        Contacts,
        WebView
    ]
})
export class ReferralsPageModule {}