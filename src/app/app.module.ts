import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routes';

import AppComponent from './app.component';
import ComponentOne from './component-one';
import ComponentTwo from './component-two';
import ActivateGuard from './activate-guard';
import DeactivateGuard from './deactivate-guard';


@NgModule({
  imports: [BrowserModule,routing],
  declarations: [AppComponent, ComponentOne,ComponentTwo],
  providers: [ActivateGuard, DeactivateGuard ],
  bootstrap: [AppComponent]
})
export class AppModule {
}