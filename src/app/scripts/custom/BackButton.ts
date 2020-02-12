import {
    Directive,
    HostListener
} from '@angular/core';
import {
    Location
} from '@angular/common';
/**
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
    selector: '[backButton]' // Attribute selector
})

export default class BackButtonDirective {

    constructor(private _location: Location) {
        console.log('Hello BackButtonDirective');
    }
    
    @HostListener('click')
    
    onClick() {
        this._location.back();
    }
}

/*
    Directive class should be exported as ExportedClass
*/
export {
    BackButtonDirective as ExportedClass
};