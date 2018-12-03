import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsModule } from './sections/app-section.module';

import { LandingComponent } from './landing.component';

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    SectionsModule
  ],
  exports: [
    LandingComponent
  ]
})
export class AppLandingModule {}