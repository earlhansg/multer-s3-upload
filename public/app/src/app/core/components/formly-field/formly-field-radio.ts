import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
 selector: 'app-formly-field-radio',
 template: `
    <div class="form__radio-group"
         *ngFor="let option of to.options">

        <input  type="radio"
                class="form__radio-input"
                [name]="to.name"
                [formControl]="formControl"
                [formlyAttributes]="field"
                [value]="option.key"
                [id]="option.value">

        <label class="form__radio-label"
                [for]="option.value">
                <span class="form__radio-button"></span>
                {{ option.value }}
        </label>

    </div>
 `,
 styles: [`
 `]
})
export class FormlyFieldRadioComponent extends FieldType {}
