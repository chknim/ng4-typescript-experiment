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
    },
    entries: [{
      id: string,
      name: string,
      icon: string,
      address?: string,
      lat?: string,
      lng?: string
    }]
  };
}
