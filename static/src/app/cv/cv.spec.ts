/// <reference path="../../../typings/index.d.ts"/>

import {CVComponent} from './hello';
import {TestBed, async} from '@angular/core/testing';

describe('cv component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CVComponent
      ]
    });
    TestBed.compileComponents();
  }));

  it('should render cv', () => {
    const fixture = TestBed.createComponent(CVComponent);
    fixture.detectChanges();
    const hello = fixture.nativeElement;
    expect(hello.querySelector('p').textContent).toBe('Ceci est mon CV');
  });
});
