import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';

import { IonicAngularModule, IonicRouterModule} from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    HomePageRoutingModule,
    IonicAngularModule,
    IonicRouterModule
  ],
  declarations: [HomePageComponent]
})
export class HomePageModule { }
