import { OpaqueToken } from '@angular/core';

export let THEME_CONFIG = new OpaqueToken('theme.config');

export interface IThemeConfig {
  header: {
    logoUrl: string,
    logoSrc: string
  };
}

export const ThemeConfig: IThemeConfig = {
  header: {
    logoUrl: '/',
    logoSrc: '/themes/default/assets/logo.png'
  }
};
