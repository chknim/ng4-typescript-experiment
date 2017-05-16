import { Component, OnInit, Inject, Injectable, HostBinding } from '@angular/core';
import { THEME_CONFIG, IThemeConfig } from '../../../../themes/default/theme.config';

import { SidebarEntry } from '../../../core/models';

@Component({
  selector: 'app-map-main',
  templateUrl: './map-main.component.html',
  styleUrls: ['./map-main.component.less']
})
@Injectable()
export class MapMainComponent implements OnInit {
  private mapConfig: any;
  private sidebarEntries: [SidebarEntry];
  private sidebarBgColor: string;
  private sidebarTextColor: string;
  private sidebarSelectBgColor: string;
  private sidebarSelectTextColor: string;

  constructor(@Inject(THEME_CONFIG) private config: IThemeConfig) {
    this.mapConfig = config.map;
  }

  ngOnInit() {
    this.sidebarEntries = [{
      name: 'Current',
      id: 'CURRENT',
      icon: 'map-marker'
    }, {
      name: 'Markham',
      id: 'MARKHAM',
      icon: 'map-marker'
    }, {
      name: 'Scarborough',
      id: 'SCARBOROUGH',
      icon: 'map-marker'
    }];

    this.sidebarBgColor = this.mapConfig.sidebar.bgColor;
    this.sidebarTextColor = this.mapConfig.sidebar.textColor;
    this.sidebarSelectBgColor = this.mapConfig.sidebar.selectBgColor;
    this.sidebarSelectTextColor = this.mapConfig.sidebar.selectTextColor;
  }

  changeView(id) {
  }
}
