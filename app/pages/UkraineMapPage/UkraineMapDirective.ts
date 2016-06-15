import { Directive, ElementRef } from '@angular/core';
import { Platform } from 'ionic-angular';

@Directive({ selector: '[ukraineDirective]' })
export class ukraineDirective {
    platform: any;
    map:any;

    constructor(el: ElementRef, platform: Platform) {
        this.platform = platform;
        this.platform.ready().then(() => {
            var zoom = 10;

            let locationOptions = {timeout: 10000, enableHighAccuracy: true};

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    let options = {
                        center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                        zoom: zoom,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };
                    this.map = new google.maps.Map(el.nativeElement, options);
                },
                (error) => {
                    alert("error connection");
                    console.log(error);
                }, locationOptions
            );

        });
    }
}