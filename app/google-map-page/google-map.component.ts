import {Component, Input, Output, EventEmitter, ElementRef, AfterViewInit, NgZone} from '@angular/core';
import {GoogleMapService} from '../services/google-map.service';

@Component({
    selector: 'google-map',
    templateUrl: "app/google-map-page/google-map.component.html"
})
export class GoogleMapComponent<T> implements AfterViewInit {
    @Input() geoObjectsPromise: Promise<T[]>;
    @Output() markerClick = new EventEmitter<T>();

    constructor(private elementRef: ElementRef, private zone: NgZone) { }

    ngAfterViewInit() {
        let div = this.elementRef.nativeElement.firstElementChild;
        let map = new GoogleMapService(div);
        this.geoObjectsPromise.then((geoObjects: T[]) => {
            geoObjects.forEach(obj => {
                let marker = map.createMarker(obj);
                marker.on('click', (obj: T) => {
                    // zone() - trigger change detection
                    this.zone.run(() => this.markerClick.emit(obj));
                });
            });
        }, error => {
            console.log(error);
        });
    }
}
