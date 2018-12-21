import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
 selector: 'app-formly-field-input',
 template: `
  <div class="form__group">
   <input [type]="to.type || 'text'" class="form__input" [formControl]="formControl" [formlyAttributes]="field">
   <label class="form__label">{{ to.label }}</label>
   </div>
   `,
 styles: [``]
})
export class FormlyFieldInputComponent extends FieldType {}
