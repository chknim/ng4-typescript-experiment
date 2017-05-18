declare const FB: any;

import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MapMainComponent } from './components/main/map-main.component';
import { FacebookService } from 'ng2-facebook-sdk';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less'],
  entryComponents: [
    MapMainComponent
  ]
})
export class MapComponent implements OnInit {
  private hasFbConnected = false;

  constructor(
    private router: Router,
    private location: Location,
    private fb: FacebookService) {}

  ngOnInit() {
    this.fb.getLoginStatus()
      .then(response => {
        if (response.status !== 'connected') {
          this.location.replaceState('/login');
          this.router.navigateByUrl('/login');
        } else {
          this.hasFbConnected = true;
        }
      });

    FB.Event.subscribe('auth.authResponseChange', response => {
      if (response.status === 'connected') {
        this.hasFbConnected = true;
      }
    });
  }
}
