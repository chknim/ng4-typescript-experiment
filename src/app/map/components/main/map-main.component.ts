import { Component, OnInit, Inject, Injectable, HostBinding } from '@angular/core';
import { THEME_CONFIG } from '../../../../themes/default/theme.config';
import { IThemeConfig } from '../../../../themes/theme-interface.config';

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
    this.sidebarEntries = this.mapConfig.entries;

    this.sidebarBgColor = this.mapConfig.sidebar.bgColor;
    this.sidebarTextColor = this.mapConfig.sidebar.textColor;
    this.sidebarSelectBgColor = this.mapConfig.sidebar.selectBgColor;
    this.sidebarSelectTextColor = this.mapConfig.sidebar.selectTextColor;

    this.welcomeMessage = this.mapConfig.main.bgText;
    this.welcomeIcon = this.mapConfig.main.bgIcon;
    this.mapEntries = this.mapConfig.entries;
  }

  getWelcomeIcon() {
    return 'glyphicon-' + this.welcomeIcon;
  }

  changeView(id) {
    this.viewId = id;
  }
}
