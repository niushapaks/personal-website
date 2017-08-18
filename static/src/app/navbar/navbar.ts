import {Component} from '@angular/core';
import Nav from './nav';

@Component({
  selector: 'navbar',
  template: require('./navbar.html')
})
export class NavBarComponent {
  public routes: Array<Nav>;

  constructor() {
    this.routes = new Array<Nav>();

    this.routes.push(new Nav('', 'Home'));
    this.routes.push(new Nav('hello', 'Hello'));
    this.routes.push(new Nav('cv', 'CV'));
  }
}
