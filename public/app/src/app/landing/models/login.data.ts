import { FormlyFieldConfig } from '@ngx-formly/core';
import { Validators } from '@angular/forms';

export const Login: FormlyFieldConfig[] = [
    {
        key: 'email',
        type: 'input',
        className: 'custom__input',
        templateOptions: {
            label: 'Email',
            placeholder: 'Enter your email',
            required: true
        }
    },
    {
        key: 'password',
        type: 'input',
        className: 'custom__input',
        templateOptions: {
            label: 'Password',
            placeholder: 'Enter your password',
            required: true
        }
    },
    {
        key: 'type',
        type: 'radio',
        templateOptions: {
            name: 'type',
            options: [ { value: 'Personal', key: 'Personal' },
                       { value: 'Group', key: 'Group' } ]
            }
    }
];

