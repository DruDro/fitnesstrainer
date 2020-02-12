import {
    Pipe,
    PipeTransform
} from '@angular/core';
import * as moment from 'moment';
/**
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
    name: 'humanize',
})

class HumanizePipe implements PipeTransform {
    /**
     * Takes a value and makes it lowercase.
     */
    transform(value: {
        seconds: number;
        nanoseconds: number;
    }, ...args) {
        const timestamp = value.seconds * 1000;
            const HDifference = moment.duration(moment().diff(moment(timestamp))).asHours();
            const DDifference = moment.duration(moment().diff(moment(timestamp))).asDays();
            if (HDifference < 1) {
                return moment(timestamp).fromNow();
            } else if (DDifference < 1) {
                return moment(timestamp).format('LT');
            } else {
                return moment(timestamp).calendar();
            }
    }
}
/*
    Pipe class should be exported as ExportedClass
*/
export {
    HumanizePipe as ExportedClass
};