import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainHolderComponent } from './mainholder/main-holder.component';
import { GoogleMapComponent } from './googlemap/google-map.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainHolderComponent,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainHolderComponent,
    GoogleMapComponent
  ]
})

export class CoreModule {}
