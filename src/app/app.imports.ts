import { RouterModule, PreloadAllModules } from '@angular/router';

import { routes } from './app-routing.module';

export const APP_IMPORTS = [
  RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
];
