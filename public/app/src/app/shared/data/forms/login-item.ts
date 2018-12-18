import { FormGroup, Validators } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';


export const loginFields: FormlyFieldConfig [] = [
    {
        key: 'email',
        type: 'input',
        className: 'form__input',
        templateOptions: {
          // className: 'form__input',
          type: 'email',
          label: 'Email',
          placeholder: 'Enter email'
        },
        validation: {
          messages: {
            required: 'You need to provide your email'
          }
        },
        validators: {
          validation: Validators.required
        }
    },
    {
        key: 'password',
        type: 'input',
        templateOptions: {
          type: 'password',
          label: 'Password',
          placeholder: 'Enter password'
        },
        validation: {
          messages: {
            required: 'You need to provide your password'
          }
        },
        validators: {
          validation: Validators.required
        }
    }
];
