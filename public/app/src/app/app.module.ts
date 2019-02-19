import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRouting } from './app-routing.module';


import { CoreModule } from './core/core.module';
import { AppLandingModule } from './landing/app-landing.module';
import { AppDashboardModule } from './dashboard/app-dashboard.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRouting,
    AppLandingModule,
    AppDashboardModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
