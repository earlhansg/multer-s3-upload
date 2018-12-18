import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
// import { Login } from '../shared/models/login.model';
import { FormlyFieldConfig } from '@ngx-formly/core';
// import { loginFields } from '../shared/data/forms/login-item';
// import { FormlyFieldConfig } from '@ngx-formly/core';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  // loginForm: FormGroup;
  // loginModel: Login;
  // loginFields: Array<FormlyFieldConfig>;

  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      className: 'custom__input',
      templateOptions: {
        label: 'Email',
        placeholder: 'Formly is terrific!',
      },
    },
    {
      key: 'password',
      type: 'input',
      className: 'custom__input',
      templateOptions: {
        label: 'Password',
        placeholder: 'Formly is terrific!',
      },
    },
    {
      key: 'gender',
      type: 'radio',
      templateOptions: {
        name: 'gender',
        options: [{ value: 'Male', key: 'M' }, { value: 'Female', key: 'F' }]
      }
    }
  ];

  constructor() {
    // this.loginForm = new FormGroup({});
    // this.loginModel = new Login();
    // this.loginFields = this.loginModel.formFields();
  }

  submit(model: any) {
    console.log(model);
  }

  ngOnInit() {}
}
