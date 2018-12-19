import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SharedModule } from '../../shared/shared.module';

import { LoginComponent } from './login/login.component';



@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    AngularFontAwesomeModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  providers: [],
  entryComponents: []
})
export class SectionsModule {}
