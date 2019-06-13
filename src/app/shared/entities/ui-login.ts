import {IdrisDto} from './idris-dto';

export class UiLogin extends IdrisDto {

  public username: string;

  public email: string;

  public  uid: string;

  constructor(username: string, email: string, uid: string) {
    super();
    this.username = username;
    this.email = email;
    this.uid = uid;
  }
}
