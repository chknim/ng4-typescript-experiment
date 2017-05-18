import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FacebookService } from 'ng2-facebook-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    private fb: FacebookService
  ) {
    fb.init({
      appId: '1743577952632644',
      xfbml: true,
      version: 'v2.9'
    });
  }

  activateEvent(event) {
    console.log('Activate Event:', event);
  }

  deactivateEvent(event) {
    console.log('Deactivate Event', event);
  }
}
