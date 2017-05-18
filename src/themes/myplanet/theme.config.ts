import { OpaqueToken } from '@angular/core';
import { IThemeConfig } from '../theme-interface.config';

export let THEME_CONFIG = new OpaqueToken('theme.config');

export const ThemeConfig: IThemeConfig = {
  header: {
    logoUrl: '/',
    logoSrc: '/themes/myplanet/assets/logo.png'
  },
  footer: {
    companyName: 'Myplanet',
    companyUrl: {
      url: '//www.myplanet.com/',
      name: 'Myplanet.com'
    },
    connectLinks: [{
      url: '//twitter.com/myplanethq',
      name: 'Twitter'
    }, {
      url: '//www.facebook.com/myplanetHQ',
      name: 'Facebook'
    }, {
      url: '//www.linkedin.com/company/-myplanet-digital',
      name: 'LinkedIn'
    }]
  },
  map: {
    sidebar: {
      bgColor: '#f05a28',
      textColor: 'white',
      selectBgColor: '#f5f6f7',
      selectTextColor: '#595959'
    },
    main: {
      bgColor: '#014194',
      bgText: 'Welcome to our map application!',
      bgIcon: 'globe'
    },
    entries: [{
      name: 'Current',
      id: 'CURRENT',
      icon: 'map-marker'
    }, {
      name: 'Toronto',
      id: 'TORONTO',
      icon: 'map-marker',
      address: '252 Adelaide St E, Toronto, ON M5A 1N1'
    }, {
      name: 'Vancouver',
      id: 'VANCOUVER',
      icon: 'map-marker',
      address: '312-510 West Hastings, Vancouver, BC V6B 1N1'
    }]
  }
};
