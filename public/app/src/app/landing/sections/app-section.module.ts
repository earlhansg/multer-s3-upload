import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';

import { LoginComponent } from './login/login.component';



@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    AngularFontAwesomeModule,
    CoreModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent,
    CoreModule
  ],
  providers: [],
  entryComponents: []
})
export class SectionsModule {}
