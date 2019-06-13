import {IdrisDto} from './idris-dto';

export class LoginRequest extends IdrisDto {
  private userEmail: string;

  private userPass: string;


  constructor(userEmail: string, userPass: string) {
    super();
    this.userEmail = userEmail;
    this.userPass = userPass;
  }
}
