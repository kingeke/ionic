import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NestedNavPageComponent } from './nested-nav.component';

const routes: Routes = [
  { path: '', component: NestedNavPageComponent },
  { path: 'page-one', loadChildren: './page-one/page-one.module#PageOneModule' },
  { path: 'page-two', loadChildren: './page-two/page-two.module#PageTwoModule' },
  { path: 'page-three', loadChildren: './page-three/page-three.module#PageThreeModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NestedNavRoutingModule { }
