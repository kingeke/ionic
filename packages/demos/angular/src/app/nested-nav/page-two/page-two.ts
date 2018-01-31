import { Component, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@danbucholtz/ng-router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'page-two',
  template: `
  <ion-nav></ion-nav>
  `
})
export class PageTwo {

  constructor(private router: Router, private location: Location) {
  }

  pushPageThree() {
    this.router.navigateByUrl('/nested-nav/page-three');
  }

  goBack() {
    window.history.back();
  }
}
