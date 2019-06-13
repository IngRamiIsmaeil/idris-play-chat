import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ChatService} from '../../../services/chat.service';
import {ChatUser} from '../../entities/chat-user';
import {LoginService} from '../../../services/login.service';

@Component({
  selector: 'idrisgames-global-chat-overview',
  templateUrl: './global-chat-overview.component.html',
  styleUrls: ['./global-chat-overview.component.scss'],
  providers: [ChatService]
})
export class GlobalChatOverviewComponent implements OnInit, OnDestroy, AfterViewInit {

  registered = false;
  message: string;
  nickName: string;
  fromChatUser: ChatUser;
  toChatUser = new ChatUser('Global');

  constructor(public chatService: ChatService, private loginService: LoginService) {
    this.nickName = this.loginService.uiLogin.username;
    console.log('In GlobalChat is user Name: ', this.loginService.uiLogin.username);
  }

  sendMessage() {
    if (this.message && this.message.trim().length > 0 && this.registered) {
      this.chatService.sendGlobalMessage(this.fromChatUser, this.toChatUser, this.message);
      this.message = '';
    }
  }

  ngOnInit(): void {
    this.registered = this.nickName? true : false;
    if (this.registered){
      this.fromChatUser = new ChatUser(this.nickName)
    }
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }

  getErrorMessage() {
    return '';
  }
}
