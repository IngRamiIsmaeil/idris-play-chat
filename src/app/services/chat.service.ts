import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { UUID } from 'angular2-uuid';
import {ChatMsg} from '../shared/entities/chat-msg';
import {RestService} from './rest.service';
import {HttpClient} from '@angular/common/http';
import {HttpErrorHandler} from './http-error-handler.service';
import {ConfigService} from './config.service';
import {ChatUser} from '../shared/entities/chat-user';
import {ChatRoom} from '../shared/entities/chat-room';

const CHAT_WEBSOCKET_URL = 'ws://localhost:8080/idrisplaychat/chats';

export const ACTION_TYPE = {
  LOAD: 'load',
  ADD: 'add',
  EDIT: 'edit',
  REMOVE: 'remove'
};

export const MESSAGE_TYPE = {
  GLOBAL: 'Global',
  PRIVATE: 'Private',
  ROOM: 'Room'
};

@Injectable({
  providedIn: 'root'
})
export class MessageWithPushBehaviour {
  private messages: Array<ChatMsg> = new Array<ChatMsg>();
  items$ = new BehaviorSubject<Array<ChatMsg>>(new Array<ChatMsg>());

  dispatch(action) {
    this.messages = this.reduce(this.messages, action);
    this.items$.next(this.messages);
  }

  reduce(messages: ChatMsg[], action): ChatMsg[] {
    switch (action.type) {
      case ACTION_TYPE.LOAD:
        return [...action.data.reverse()];
      case ACTION_TYPE.ADD:
        return [action.data, ...messages];
      case ACTION_TYPE.EDIT:
        return messages.map( m => {
          const mes = action.data;
          return m.id === mes.id ? mes : m;
        });
      case ACTION_TYPE.REMOVE:
        return messages.filter(m => m.id !== action.data.id);
      default:
        return messages;
    }
  }

}
@Injectable({
  providedIn: 'root'
})
export class ChatService extends RestService<any> implements OnDestroy {

  messages$: Observable<ChatMsg[]>;
  private ws: WebSocket;

  constructor(
    private messageWithPushBehaviour: MessageWithPushBehaviour,
    protected httpClient: HttpClient,
    protected httpErrorHandler: HttpErrorHandler,
    protected configService: ConfigService
  ) {
    super(httpClient, httpErrorHandler, configService);
    this.messages$ = messageWithPushBehaviour.items$;
    this.ws = new WebSocket(CHAT_WEBSOCKET_URL);
    this.ws.onmessage = this.onMessage.bind(this);
  }

  onMessage(ev: MessageEvent) {
    console.log(ev);
    const result = JSON.parse(ev.data);
    this.messageWithPushBehaviour.dispatch({type: (Array.isArray(result) ?
        ACTION_TYPE.LOAD : ACTION_TYPE.ADD), data: result});
  }

  getGlobalMessage(){

  }

  getPrivateMessageFromUser(){

  }

  getPrivateMessageFromRoom() {

  }

  getPrivateMessageFromAdmin() {

  }
  sendMessage(persona: string, message: string) {

  }

  sendGlobalMessage(fromChatUser: ChatUser, toChatUser: ChatUser, message: string) {
    this.ws.send(JSON.stringify(new ChatMsg(MESSAGE_TYPE.GLOBAL, UUID.UUID(), fromChatUser, toChatUser, new ChatRoom('Global'),  message)));
  }

  sendPrivateMessageToUser() {

  }

  sendPrivateMessageToRoom(){

  }

  sendAskingLogin(personEm: string, personPW: string, cfg: number) {

  }

  sendAskToEnterRoom(){

  }

  ngOnDestroy() {
    this.ws.close();
  }
}
