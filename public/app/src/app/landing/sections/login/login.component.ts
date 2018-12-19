import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Login } from './model/login.model';
import { FormlyFieldConfig } from '@ngx-formly/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm   : FormGroup;
  loginModel  : Login;
  loginFields : Array<FormlyFieldConfig>;
  // @Input() data;
  // @Input() formDataObj;


  constructor() {
    this.loginForm = new FormGroup({});
    this.loginModel = new Login();
    this.loginFields = this.loginModel.formFields();
   }

  ngOnInit() {}

  submit(model: Login) {
    console.log(model);
  }

}
