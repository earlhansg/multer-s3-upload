import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Login } from '../../models/login.data';
import { FormlyFieldConfig } from '@ngx-formly/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../../assets/css/custom-login.input.css']
})
export class LoginComponent implements OnInit {
  loginForm   : FormGroup;
  loginFields : FormlyFieldConfig[] = Login;
  loginModel  = {};


  constructor() {
    this.loginForm = new FormGroup({});
   }

  ngOnInit() {}

  submit(model: any) {
    console.log(model);
  }

}
