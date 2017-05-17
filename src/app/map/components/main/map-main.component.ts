import { Component, OnInit, Inject, Injectable, HostBinding } from '@angular/core';
import { THEME_CONFIG, IThemeConfig } from '../../../../themes/default/theme.config';

import { SidebarEntry } from '../../../core/models';
import { MapEntry } from '../models';

@Component({
  selector: 'app-map-main',
  templateUrl: './map-main.component.html',
  styleUrls: ['./map-main.component.less']
})
@Injectable()
export class MapMainComponent implements OnInit {
  private mapConfig: any;

  // sidebar
  private sidebarEntries: [SidebarEntry];
  private sidebarBgColor: string;
  private sidebarTextColor: string;
  private sidebarSelectBgColor: string;
  private sidebarSelectTextColor: string;

  // main area
  private welcomeMessage: string;
  private welcomeIcon: string;
  private viewId: string;
  private mapEntries: [MapEntry];

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

    this.welcomeMessage = this.mapConfig.main.bgText;
    this.welcomeIcon = this.mapConfig.main.bgIcon;
    this.mapEntries = [{
      name: 'Current',
      id: 'CURRENT'
    }, {
      name: 'Markham',
      id: 'MARKHAM',
      address: '7980 Birchmount Rd, Markham, ON L6G'
    }, {
      name: 'Scarborough',
      id: 'SCARBOROUGH',
      address: '2206 Eglinton Ave E, Scarborough, ON M1L 4S8'
    }];
  }

  getWelcomeIcon() {
    return 'glyphicon-' + this.welcomeIcon;
  }

  changeView(id) {
    this.viewId = id;
  }
}
