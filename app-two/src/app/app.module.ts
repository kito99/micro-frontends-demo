import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {Location} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {createCustomElement} from '@angular/elements';
import {Router} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [
    AppComponent
  ],
})
export class AppModule {

  constructor(private injector: Injector, private router: Router, private location: Location) {
  }

  ngDoBootstrap() {
    const customElement = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('x-app-two', customElement);
  }
}
