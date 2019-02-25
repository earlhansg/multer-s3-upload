import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    LandingRoutingModule
  ],
  exports: [
    LandingComponent
  ]
})
export class LandingModule {}
