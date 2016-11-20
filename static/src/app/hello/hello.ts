import {Component} from '@angular/core';

@Component({
  template: require('./hello.html')
})
export class HelloComponent {
  public hello: string;

  constructor() {
    this.hello = 'Hey.';
  }
}
