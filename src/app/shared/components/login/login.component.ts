import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';

@Component({
  selector: 'idrisgames-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(public loginService: LoginService) { }

  ngOnInit() {
  }

  doLogin() {
    this.loginService.login().then().catch(err => {});
  }
}
