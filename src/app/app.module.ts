import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FacebookModule } from 'ng2-facebook-sdk';

import { APP_IMPORTS } from './app.imports';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MapModule } from './map/map.module';
import { LoginModule } from './login/login.module';

import { THEME_CONFIG, ThemeConfig } from '../themes/default/theme.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    APP_IMPORTS,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    CoreModule,
    MapModule,
    LoginModule,
    FacebookModule.forRoot()
  ],
  providers: [{
    provide: THEME_CONFIG,
    useValue: ThemeConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
