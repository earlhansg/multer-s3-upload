import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppBootstrapModule } from './bootstrap/app-bootstrap.module';

import { FormlyModule } from '@ngx-formly/core';

import { FormlyFieldInputComponent } from './components/formly-field/formly-field-input';
import { FormlyFieldRadioComponent } from './components/formly-field/formly-field-radio';


const formlyConfig = {
    types: [
      { name: 'input', component: FormlyFieldInputComponent },
      { name: 'radio', component: FormlyFieldRadioComponent }
    ]
};

@NgModule({
  imports: [
    CommonModule,
    AppBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(formlyConfig)
  ],
  declarations: [
    FormlyFieldInputComponent,
    FormlyFieldRadioComponent
  ],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyFieldInputComponent,
    FormlyFieldRadioComponent
  ],
  entryComponents: [
    FormlyFieldInputComponent,
    FormlyFieldRadioComponent
  ]
})
export class CoreModule {}
