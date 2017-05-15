import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { MapComponent } from './map.component';
import { MapMainComponent } from './components/main/map-main.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [
    MapComponent,
    MapMainComponent
  ],
  exports: [
    MapComponent
  ]
})
export class MapModule { }
