import { FormlyFieldConfig } from '@ngx-formly/core';

export const Login: FormlyFieldConfig[] = [
    {
        key: 'email',
        type: 'input',
        className: 'custom__input',
        templateOptions: {
        label: 'Email',
        placeholder: 'Enter your email'
        }
    },
    {
        key: 'password',
        type: 'input',
        className: 'custom__input',
        templateOptions: {
            label: 'Password',
            placeholder: 'Enter your password'
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

