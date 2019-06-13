import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';

import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import {DialogModule} from 'primeng/dialog';
import {TableModule} from 'primeng/table';
import {
  CheckboxModule,
  ContextMenuModule,
  DropdownModule,
  FileUploadModule,
  MultiSelectModule,
  ScheduleModule,
  TooltipModule,
  PanelModule,
  ScrollPanelModule

} from 'primeng/primeng';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {GrowlModule} from 'primeng/growl';

import {SelfModule} from '../components/self/self.module';
import {PipesCommonModule} from '../pipes/pipes-common/pipes-common.module';
import { CalendarEventComponent } from './components/calendar-event/calendar-event.component';
import { IdrisTableComponent } from './components/idris-table/idris-table.component';
import {ToastModule} from 'primeng/toast';
import { VideoChatComponent } from './components/video-chat/video-chat.component';
import { GlobalChatOverviewComponent } from './components/global-chat-overview/global-chat-overview.component';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { PrivateChatOverviewComponent } from './components/private-chat-overview/private-chat-overview.component';
import {MaterialModule} from './material/material.module';
import { OtherSideVideoChatComponent } from './components/other-side-video-chat/other-side-video-chat.component';
import { CardGameComponent } from './components/card-game/card-game.component';
import { IdrisMatTableComponent } from './components/idris-mat-table/idris-mat-table.component';
import { EditCellComponent } from './components/idris-mat-table/edit-cell/edit-cell.component';
import { SatPopoverModule } from '@ncstate/sat-popover';
import { RowContextMenuComponent } from './components/idris-mat-table/row-context-menu/row-context-menu.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ButtonModule,
    PasswordModule,
    DialogModule,
    TableModule,
    ScheduleModule,
    MessagesModule,
    MessageModule,
    CheckboxModule,
    MultiSelectModule,
    FileUploadModule,
    DropdownModule,
    TooltipModule,
    PanelModule,
    ScrollPanelModule,
    ToastModule,
    ContextMenuModule,
    GrowlModule,
    SelfModule,
    PipesCommonModule,
    SatPopoverModule
  ],
  declarations: [LoginComponent, CalendarEventComponent, IdrisTableComponent, VideoChatComponent, GlobalChatOverviewComponent, ChatMessageComponent, PrivateChatOverviewComponent, OtherSideVideoChatComponent, CardGameComponent, CardGameComponent, IdrisMatTableComponent, EditCellComponent, RowContextMenuComponent],
  exports: [LoginComponent, CalendarEventComponent, IdrisTableComponent, VideoChatComponent, GlobalChatOverviewComponent, ChatMessageComponent, PrivateChatOverviewComponent, OtherSideVideoChatComponent, CardGameComponent, IdrisMatTableComponent, EditCellComponent, RowContextMenuComponent]
})
export class ShardModule { }
