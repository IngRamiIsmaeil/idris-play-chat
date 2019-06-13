import {IdrisDto} from './idris-dto';

export class ChatRoom extends IdrisDto{
  public roomName: string;
  constructor(roomName: string) {
    super();
    this.roomName = roomName;
  }
}
