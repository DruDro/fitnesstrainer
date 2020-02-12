import {
    NgModule
} from '@angular/core';
import {
    IonicModule
} from '@ionic/angular';
import {
    ExportedClass as humanize
} from './custom/humanize';
@NgModule({
    declarations: [
        humanize,
    ],
    imports: [IonicModule],
    exports: [
        humanize,
    ]
})
export class PipesModule {}