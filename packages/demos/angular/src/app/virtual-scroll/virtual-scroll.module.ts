import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VirtualScrollPageComponent } from './virtual-scroll-page.component';
import { VirtualScrollRoutingModule } from './virtual-scroll-routing.module';

@NgModule({
  imports: [
    CommonModule,
    VirtualScrollRoutingModule
  ],
  declarations: [VirtualScrollPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VirtualScrollModule { }
