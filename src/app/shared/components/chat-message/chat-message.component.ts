import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ChatMsg} from '../../entities/chat-msg';

@Component({
  selector: 'idrisgames-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit, AfterViewInit {
  constructor() { }
  @Input() msg: ChatMsg;
  @Input() important = false;
  @Input() isOwnerOfMsg = false;
  ngOnInit() {

  }

  ngAfterViewInit(): void {
    console.log('Check user ', this.isOwnerOfMsg);
  }
}
