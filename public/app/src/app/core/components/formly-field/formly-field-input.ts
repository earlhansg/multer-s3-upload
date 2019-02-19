import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';

@Component({
 selector: 'app-formly-field-input',
 template: `
  <div class="form__group">
   <input [ngClass]="{
          'form__input': true,
          'form__valid': formControl.valid,
          'form__invalid': formControl.valid || formControl.dirty && formControl.touched }"
          [type]="to.type || 'text'"
          [formControl]="formControl"
          [formlyAttributes]="field">
   <label class="form__label">{{ to.label }}</label>
  </div>
   `,
 styles: [`
 ::ng-deep .form__invalid {
       border-bottom: 3px solid #ff7730;
   }
 ::ng-deep .form__valid {
       border-bottom: 3px solid #55c57a;
   }
 `]
})
export class FormlyFieldInputComponent extends FieldType {}
