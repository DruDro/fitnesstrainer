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
/*
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
class Utils {
    constructor(private Apperyio: ApperyioHelperService) {}

    public getDayMsec(n: number): number {
        return n * 24 * 60 * 60 * 1000;
    }

    public getHHMMLabel(dateString: string): string {
        const d: Date = new Date(dateString);
        const mins = `0${d.getMinutes()}`.slice(-2);
        return `${d.getHours()}:${mins}`;
    }

    public roundnum(num: number, step: number) {
        return Math.round(num / step) * step;
    }
    
    public compareNumbers(a: number, b: number){
        return a - b;
    }
    
    public getChartMaxY(rates, step) {
        return this.roundnum(Math.round(rates[rates.length - 1] * 1.1), step);
    }

}

/*
    Service class should be exported as ExportedClass
*/
export {
    Utils as ExportedClass
};