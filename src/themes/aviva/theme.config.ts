import { OpaqueToken } from '@angular/core';
import { IThemeConfig } from '../theme-interface.config';

export let THEME_CONFIG = new OpaqueToken('theme.config');

export const ThemeConfig: IThemeConfig = {
  header: {
    logoUrl: '/',
    logoSrc: '/themes/aviva/assets/logo.png'
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
    },
    entries: [{
      name: 'Current',
      id: 'CURRENT',
      icon: 'map-marker'
    }, {
      name: 'Markham',
      id: 'MARKHAM',
      icon: 'map-marker',
      address: '7980 Birchmount Rd, Markham, ON L6G'
    }, {
      name: 'Scarborough',
      id: 'SCARBOROUGH',
      icon: 'map-marker',
      address: '2206 Eglinton Ave E, Scarborough, ON M1L 4S8'
    }]
  }
};
