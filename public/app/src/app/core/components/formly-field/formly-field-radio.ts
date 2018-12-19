import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
 selector: 'app-formly-field-radio',
 template: `
    <div *ngFor="let option of to.options">
    <input type="radio"
            [name]="to.name"
            [formControl]="formControl"
            [formlyAttributes]="field"
            [value]="option.key">
    {{ option.value }}
    </div>
 `,
 styles: [`
 `]
})
export class FormlyFieldRadioComponent extends FieldType {}
