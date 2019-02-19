import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';
import { LandingRoutingModule } from './landing-routing.module';

import { LandingComponent } from './landing.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    LandingComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    LandingRoutingModule
  ],
  exports: [
    LandingComponent
  ]
})
export class AppLandingModule {}
