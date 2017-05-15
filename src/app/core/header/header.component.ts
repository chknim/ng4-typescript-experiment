import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { THEME_CONFIG, IThemeConfig } from '../../../themes/default/theme.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
@Injectable()
export class HeaderComponent implements OnInit {
  // Themable parameters
  headerConfig;
  logoUrl;
  logoSrc;

  constructor(@Inject(THEME_CONFIG) private config: IThemeConfig) {
    this.headerConfig = config.header;
  }

  ngOnInit() {
    this.logoUrl = this.headerConfig.logoUrl;
    this.logoSrc = this.headerConfig.logoSrc;
  }

}
