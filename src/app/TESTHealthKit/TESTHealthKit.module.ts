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
    TESTHealthKit
} from './TESTHealthKit';
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
    HealthKit
} from '@ionic-native/health-kit/ngx';
@NgModule({
    declarations: [
        TESTHealthKit
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
            component: TESTHealthKit
        }])
    ],
    exports: [
        TESTHealthKit
    ],
    providers: [
        HealthKit
    ]
})
export class TESTHealthKitPageModule {}