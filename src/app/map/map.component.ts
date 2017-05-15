import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { MapMainComponent } from './components/main/map-main.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less'],
  entryComponents: [
    MapMainComponent
  ]
})
export class MapComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
