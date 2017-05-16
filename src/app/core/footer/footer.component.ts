import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { THEME_CONFIG, IThemeConfig } from '../../../themes/default/theme.config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
@Injectable()
export class FooterComponent implements OnInit {
  // Themable parameters
  private footerConfig;
  private companyUrl;
  private connectLinks;
  private companyName;

  constructor(@Inject(THEME_CONFIG) private config: IThemeConfig) {
    this.footerConfig = config.footer;
  }

  ngOnInit() {
    this.companyUrl = this.footerConfig.companyUrl;
    this.connectLinks = this.footerConfig.connectLinks;
    this.companyName = this.footerConfig.companyName;
  }

}
