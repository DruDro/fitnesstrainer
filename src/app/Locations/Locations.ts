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
    AlertController
} from '@ionic/angular';
import {
    ViewChild
} from '@angular/core';
import {
    Geolocation
} from '@ionic-native/geolocation/ngx';
import {
    ExportedClass as DataService
} from '../scripts/custom/DataService';
import {
    ExportedClass as BackendService
} from '../scripts/custom/BackendService';
import {
    MapsAPILoader
} from '@agm/core';
@Component({
    templateUrl: 'Locations.html',
    selector: 'page-locations',
    styleUrls: ['Locations.scss']
})
export class Locations {
    public lat: number;
    public lon: number;
    public directionsService: any;
    public directionsDisplay: any;
    @ViewChild('map', {
        static: false
    }) public _map: any;
    public map: any;
    public google: any;
    public routes: any;
    public ref: any;
    public travelModes: any = [{
        label: 'By car',
        value: 'DRIVING'
    }, {
        label: 'By bicycle',
        value: 'BICYCLING'
    }, {
        label: 'By public transport',
        value: 'TRANSIT'
    }, {
        label: 'On foot',
        value: 'WALKING'
    }];
    public travelMode: string = 'DRIVING';
    public destination: any;
    public locations: any = [];
    public currentItem: any = null;
    public mappingData: any = {};
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public dataService: DataService, public geolocation: Geolocation, public mapsAPILoader: MapsAPILoader, public alertController: AlertController, public backendService: BackendService) {
        console.log("constructor");
    }
    mapLoaded() {
        this.directionsService = new this.google.maps.DirectionsService;
        this.directionsDisplay = new this.google.maps.DirectionsRenderer;
    }
    async calculateAndDisplayRoute() {
        const destination = new this.google.maps.LatLng(this.destination.lat, this.destination.lng);
        const origin = new this.google.maps.LatLng(this.lat, this.lon);
        console.log("origin", origin);
        console.log("destination", destination);
        this.directionsService.route({
            origin: origin,
            destination: destination,
            travelMode: this.travelMode.trim()
        }, async (response, status) => {
            if (status === 'OK') {
                console.log(response);
                this.routes = response.routes[0].legs[0].steps;
                this.directionsDisplay.setDirections(response);
                // const instructionsRows = document.getElementsByClassName('locations-instructions');
                // while (instructionsRows.length) {
                //     instructionsRows[0].parentNode.removeChild(instructionsRows[0]);
                // }
                // this.routes.forEach(route => {
                //     document.getElementsByClassName('info-grid')[0].insertAdjacentHTML('beforeend', `<ion-row class="locations-instructions"><ion-col>${route.instructions}</ion-col><ion-col class="duration-col" text-right><ion-text class="duration">${route.duration.text}</ion-text><ion-text class="distance">${route.distance.text}</ion-text></ion-col></ion-row>`);
                // });
                this.ref.markForCheck();
            } else {
                if (status === 'ZERO_RESULTS') {
                    const label = this.travelModes.find(({
                        value
                    }) => value === this.travelMode).label.toLowerCase();
                    const alert = await this.alertController.create({
                        subHeader: `No ways to get ${label}`,
                        buttons: ['OK']
                    });
                    await alert.present();
                    this.changeMode('WALKING');
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            }
        });
    }
    changeMode(mode) {
        this.travelMode = mode;
        this.calculateAndDisplayRoute();
    }
    async ionViewWillEnter() {
        this.ref = this.$aio_changeDetector;
        const self = this;
        this.locations = await this.backendService.getLocations();
        this.geolocation.getCurrentPosition().then((resp) => {
            // Setting current position
            // self.lat = resp.coords.latitude;
            // self.lon = resp.coords.longitude;
            self.lat = 33.026591;
            self.lon = -96.782935;
            this.mapsAPILoader.load().then(() => {
                this.google = window['google'];
                this.map = new this.google.maps.Map(this._map.nativeElement, {
                    zoom: 6,
                    center: {
                        lat: this.lat,
                        lng: this.lon
                    }
                });
                this.locations.forEach(location => {
                    const marker = new this.google.maps.Marker({
                        map: this.map,
                        position: {
                            lat: location.latitude,
                            lng: location.longitude,
                        }
                    });
                    marker.addListener('click', (marker) => {
                        this.destination = {
                            lat: marker.latLng.lat(),
                            lng: marker.latLng.lng(),
                        };
                        this.calculateAndDisplayRoute();
                    });
                });
                this.directionsService = new this.google.maps.DirectionsService;
                this.directionsDisplay = new this.google.maps.DirectionsRenderer;
                this.directionsDisplay.setMap(this.map);
                this.destination = {
                    lat: this.locations[0].latitude,
                    lng: this.locations[0].longitude
                };
                this.calculateAndDisplayRoute();
                //    this.isMapLoader = true;
                //    this.mapLoaded();
            })
        }).catch((error) => {
            alert(JSON.stringify(error));
        });
    }
    async button2Click__j_659(event ? , currentItem ? ) {
        /* Run TypeScript */
        this.Apperyio.showModal("DirectionsDetailsModal", {
                componentProps: {
                    routes: this.routes
                },
                showBackdrop: true,
                backdropDismiss: true,
                cssClass: "",
                animated: true,
                keyboardClose: true
            })
            .then(modal => {
                modal.present();
                modal.onDidDismiss().then((dataReturned) => {
                    // console.log(dataReturned.data);
                });
            });;
    }
}