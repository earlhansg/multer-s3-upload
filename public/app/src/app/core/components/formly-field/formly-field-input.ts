import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
 selector: 'app-formly-field-input',
 template: `
   <label>{{ to.label }}</label>
   <input [type]="to.type || 'text'" class="form__input" [formControl]="formControl" [formlyAttributes]="field">
 `,
 styles: [`
 :host { display: inherit; }
    .form__input {
      font-size: 1.5rem;
      font-family: inherit;
      color: inherit;
      padding: 1.5rem 2rem;
      border-radius: 2px;
      background-color: red;
      border: none;
      border-bottom: 3px solid transparent;
      // margin-top: 12rem;
      width: 50%;
      display: block;
      transition: all .3s;
    }

    ::ng-deep .custom__input label {
      background-color: red;
    }
 `]
})
export class FormlyFieldInputComponent extends FieldType {}
