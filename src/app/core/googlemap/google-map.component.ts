declare var google: any;

import { Component, OnInit, Input, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.less']
})
export class GoogleMapComponent implements OnInit, AfterViewInit {
  @Input('lat') lat: string;
  @Input('lng') lng: string;
  @Input('address') address: string;

  private map: any;
  private marker: any;
  private isLoading = true;

  constructor(private elRef: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    const googleMap = this.elRef.nativeElement.querySelector('.google-map'),
          promise = new Promise((resolve, reject) => {
            if (this.address) {
              const geocoder = new google.maps.Geocoder();
              geocoder.geocode({address: this.address}, (results, status) => {
                if (status === google.maps.GeocoderStatus.OK) {
                  resolve(results[0].geometry.location);
                } else {
                  reject({
                    message: 'Geocode was not successful for the following reason: ' + status
                  });
                }
              });
            } else if (this.lat && this.lng) {
              resolve({
                lat: this.lat,
                lng: this.lng
              });
            } else {
              // Try HTML5 geolocation.
              if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                  resolve({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                  });
                }, () => {
                  reject({
                    message: 'Browser cannot find current location'
                  });
                });
              } else {
                reject({
                  message: 'Browser does not support Geolocation'
                });
              }
            }
          });

    promise.then((pos) => {
      this.map = new google.maps.Map(googleMap, {
        center: pos,
        zoom: 15
      });
      this.marker = new google.maps.Marker({
        position: pos,
        map: this.map
      });
      this.map.setCenter(pos);
    })
    .catch(e => {
      this.handleLocationError(e);
    });
  }

  handleLocationError(error) {
    // todo: error message?
    console.log(error.message);
  }
}
