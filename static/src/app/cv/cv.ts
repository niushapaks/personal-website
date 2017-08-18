import {Component} from '@angular/core';

@Component({
  template: require('./cv.html')
})
export class CVComponent {
  public hello: string;

  constructor() {
    this.hello = 'Ceci est mon CV';
  }
}
