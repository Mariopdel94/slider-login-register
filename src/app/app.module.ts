import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LaddaModule } from 'angular2-ladda';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LaddaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
