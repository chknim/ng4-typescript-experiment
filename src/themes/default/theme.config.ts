import { OpaqueToken } from '@angular/core';

export let THEME_CONFIG = new OpaqueToken('theme.config');

export interface IThemeConfig {
  header: {
    logoUrl: string,
    logoSrc: string
  };
  footer: {
    companyName: string,
    companyUrl: {
      url: string,
      name: string
    },
    connectLinks: [{
      url: string,
      name: string
    }]
  };
}

export const ThemeConfig: IThemeConfig = {
  header: {
    logoUrl: '/',
    logoSrc: '/themes/default/assets/logo.png'
  },
  footer: {
    companyName: 'Aviva Canada',
    companyUrl: {
      url: '//www.avivainsurance.ca/',
      name: 'Avivainsurance.ca'
    },
    connectLinks: [{
      url: '//twitter.com/avivacanada',
      name: 'Twitter'
    }, {
      url: '//www.facebook.com/AvivaCanada',
      name: 'Facebook'
    }, {
      url: '//www.linkedin.com/company/aviva-canada',
      name: 'LinkedIn'
    }]
  }
};
