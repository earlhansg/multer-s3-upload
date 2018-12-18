import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { FormlyModule } from '@ngx-formly/core';


import { SharedModule } from '../shared/shared.module';
import { SectionsModule } from './sections/app-section.module';

import { LandingComponent } from './landing.component';

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    SectionsModule
  ],
  exports: [
    LandingComponent
  ]
})
export class AppLandingModule {}
