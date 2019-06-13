import {Component, OnInit} from '@angular/core';
import {UsertableService} from '../../../services/usertable.service';

@Component({
  selector: 'app-login-success-welcome',
  templateUrl: './login-success-welcome.component.html',
  styleUrls: ['./login-success-welcome.component.scss'],
  providers: [UsertableService]
})
export class LoginSuccessWelcomeComponent implements OnInit {

  constructor(public service: UsertableService) { }

  ngOnInit() {
  }

}
