import {IdrisDto} from './idris-dto';

export class ChatUser extends IdrisDto{
  public userName: string
  constructor(userName: string) {
    super();
    this.userName = userName;
  }

}
