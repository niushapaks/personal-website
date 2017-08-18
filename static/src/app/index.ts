import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {HelloComponent} from './hello/hello';
import {HomeComponent} from './home/home';
import {CVComponent} from './cv/cv';
import {NavBarComponent} from './navbar/navbar';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    RootComponent,
    HelloComponent,
    HomeComponent,
    CVComponent,
    NavBarComponent
  ],
  bootstrap: [RootComponent, NavBarComponent]
})
export class AppModule {}
