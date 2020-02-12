import {
    NgModule
} from '@angular/core';
import {
    IonicModule
} from '@ionic/angular';
import {
    ExportedClass as BackButton
} from './custom/BackButton';
@NgModule({
    declarations: [
        BackButton,
    ],
    imports: [IonicModule],
    exports: [
        BackButton,
    ]
})
export class DirectivesModule {}