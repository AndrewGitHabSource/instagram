import { Directive, ElementRef } from '@angular/core';
import { Platform } from 'ionic-angular';

@Directive({selector: '[usaDirective]'})
export class usaDirective {
    platform:any;
    map:any;

    constructor(el:ElementRef, platform:Platform) {
        this.platform = platform;
        this.platform.ready().then(() => {
            let zoom = 10;

            let promise = new Promise(function (resolve, reject) {
                google.maps.event.addDomListener(window, 'load', initialize => {
                    new google.maps.Map(el.nativeElement, {
                        zoom: zoom,
                        center: new google.maps.LatLng(40.7878800, -74.0143100),
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    });
                });

                if (google.maps.GeocoderStatus.OK) {
                    resolve();
                }
                else {
                    reject(new Error("Network Error"));
                }
            });

            promise.then(function () {
                console.log("success");
            }, function () {
                setTimeout(function () {
                    alert("Error connection");
                }, 10000);
            });


        });

    }
}