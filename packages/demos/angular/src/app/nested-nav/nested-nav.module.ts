import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NestedNavPageComponent } from './nested-nav.component';
import { NestedNavRoutingModule } from './nested-nav-routing.module';
import { IonicAngularModule, IonicRouterModule} from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    NestedNavRoutingModule,
    IonicAngularModule,
    IonicRouterModule
  ],
  declarations: [
    NestedNavPageComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NestedNavModule { }
