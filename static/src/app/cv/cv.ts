import {Component} from '@angular/core';
import {Formation} from './model/Formation';
import {ProfessionalExperience} from './model/ProfessionalExperience';

@Component({
  template: require('./cv.html')
})
export class CVComponent {
  public hello: string; 
  public formations : Formation[];

  constructor() {
    this.hello = 'Ceci est mon CV';
    
    this.formations = [
        { begin: new Date(), end: new Date(), title: "Master MIAGE", organization: "Université Paris-Est Créteil", location: "Créteil"},
        { begin: new Date(), end: new Date(), title: "BTS IRIS", organization: "CFA Dorian", location: "Paris"},
        { begin: new Date(), end: new Date(), title: "BAC STI électronique", organization: "Lycée Cherioux", location: "Vitry sur Seine"}
    ];
    
  }
}
