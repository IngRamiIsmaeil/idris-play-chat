import {ChatUser} from './chat-user';
import {ChatRoom} from './chat-room';
import {IdrisDto} from './idris-dto';

export class ChatVideo extends IdrisDto{
  constructor(
    public type: string,
    public id: string,
    public fromChatUser: ChatUser,
    public toChatUser: ChatUser,
    public chatRoom: ChatRoom,
    public data: string[]
  ) { super();}
}
