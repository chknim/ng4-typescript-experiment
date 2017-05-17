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
  map: {
    sidebar: {
      bgColor: string,
      textColor: string,
      selectBgColor: string,
      selectTextColor: string
    },
    main: {
      bgColor: string,
      bgText: string,
      bgIcon: string
    }
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
  },
  map: {
    sidebar: {
      bgColor: '#014194',
      textColor: 'white',
      selectBgColor: '#f5f6f7',
      selectTextColor: '#595959'
    },
    main: {
      bgColor: '#014194',
      bgText: 'Welcome to our map application!',
      bgIcon: 'globe'
    }
  }
};
