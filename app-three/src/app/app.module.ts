import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {Location} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {createCustomElement} from '@angular/elements';
import {Router} from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TableModule
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
    customElements.define('x-app-three', customElement);

  }
}
