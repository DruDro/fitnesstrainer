import {
    Component,
    ChangeDetectorRef
} from '@angular/core';
import {
    ApperyioHelperService
} from '../scripts/apperyio/apperyio_helper';
import {
    ApperyioMappingHelperService
} from '../scripts/apperyio/apperyio_mapping_helper';
import {
    HealthKit
} from '@ionic-native/health-kit/ngx';
@Component({
    templateUrl: 'TESTHealthKit.html',
    selector: 'page-t-e-s-t-health-kit',
    styleUrls: ['TESTHealthKit.scss']
})
export class TESTHealthKit {
    public workouts: any;
    public currentItem: any = null;
    public mappingData: any = {};
    requestAutorization() {
        debugger;
        console.log(' this.healthKit', this.healthKit);
        var supportedTypes = [
            'HKQuantityTypeIdentifierHeight',
            'HKQuantityTypeIdentifierHeartRate',
            'HKQuantityTypeIdentifierStepCount',
            'HKQuantityTypeIdentifierDistanceWalkingRunning',
            'HKCategoryTypeIdentifierSleepAnalysis'
        ];
        this.healthKit.requestAuthorization({
            readTypes: supportedTypes,
            writeTypes: supportedTypes
        }).then(
            function() {
                alert('requestAutorization ok')
            },
            function() {
                alert('requestAutorization nok')
            }
        );
    }
    checkAuthStatus() {
        this.healthKit.checkAuthStatus({
                'type': 'HKQuantityTypeIdentifierHeight'
            })
            .then(
                function() {
                    alert('checkAuthStatus ok')
                },
                function() {
                    alert('checkAuthStatus nok')
                }
            );
    }
    findWorkouts() {
        this.healthKit.findWorkouts()
            .then(data => {
                    alert('findWorkouts ok');
                    debugger;
                    this.workouts = data;
                },
                error => {
                    console.log('error', error);
                    this.workouts = error;
                    alert(`findWorkouts error ${error}`);
                }
            );
    }
    querySampleTypeHeartRate() {
        this.healthKit.querySampleType({
                sampleType: 'HKQuantityTypeIdentifierHeartRate',
                startDate: new Date(new Date().getTime() - 90 * 24 * 60 * 60 * 1000),
                endDate: new Date(),
                unit: 'count/min',
            })
            .then(
                value => alert(`querySampleTypeHeartRate ok  ${value}`),
                error => alert(`querySampleTypeHeartRate error  ${error}`),
            );
    }
    getHeight() {
        this.healthKit.readHeight({
                unit: 'cm'
            })
            .then(data => {
                    alert(`readHeight ok  ${data}`);
                },
                error => {
                    console.log('error', error);
                    alert(`readHeight error ${error}`);
                }
            );
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public healthKit: HealthKit) {}
}