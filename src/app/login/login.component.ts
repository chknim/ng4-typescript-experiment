declare const FB: any;

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FacebookService } from 'ng2-facebook-sdk';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private location: Location,
    private fb: FacebookService) { }

  ngOnInit() {
    this.fb.getLoginStatus()
      .then(response => {
        if (response.status !== 'connected') {
          this.fb.init({
            appId: '1743577952632644',
            xfbml: true,
            version: 'v2.9'
          });
        }
      });

    FB.Event.subscribe('auth.authResponseChange', response => {
      if (response.status === 'connected') {
        this.location.replaceState('/');
        this.router.navigateByUrl('/');
      }
    });
  }
}
