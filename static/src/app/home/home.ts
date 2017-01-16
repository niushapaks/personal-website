import {Component} from '@angular/core';

@Component({
  selector: 'home',
  template: require('./home.html')
})
export class HomeComponent {
  public hello: string;

  constructor() {
    this.hello = 'En construction.';
  }
}
