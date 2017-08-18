/// <reference path="../../typings/index.d.ts"/>

import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HelloComponent} from './hello/hello';
import {HomeComponent} from './home/home';
import {NavBarComponent} from './navbar/navbar';
import {CVComponent} from './cv/cv';

@Component({
  selector: 'root',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent {}

export const routes: Routes = [
  {
    path: 'hello',
    component: HelloComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
      path: 'cv',
      component: CVComponent
  }
];

export const routing = RouterModule.forRoot(routes);
