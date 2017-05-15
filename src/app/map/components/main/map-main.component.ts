import { Component, OnInit } from '@angular/core';

import { SidebarEntry } from '../../../core/models';

@Component({
  selector: 'app-map-main',
  templateUrl: './map-main.component.html',
  styleUrls: ['./map-main.component.less']
})
export class MapMainComponent implements OnInit {
  sidebarEntries: [SidebarEntry];

  constructor() { }

  ngOnInit() {
    this.sidebarEntries = [{
      name: 'Current',
      id: 'CURRENT'
    }, {
      name: 'Markham',
      id: 'MARKHAM'
    }, {
      name: 'Scarborough',
      id: 'SCARBOROUGH'
    }];
  }

}
