import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FieldsetModule} from 'primeng/fieldset';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

import {OverviewComponent} from './chat/overview/overview.component';
import {DashboardComponent} from './user/dashboard/dashboard.component';
import {LogoutSuccessByeComponent} from './start/logout-success-bye/logout-success-bye.component';
import {LoginSuccessWelcomeComponent} from './start/login-success-welcome/login-success-welcome.component';

import {ShardModule} from '../shared/shard.module';
import { WelcomeComponent } from './start/welcome/welcome.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CardOverviewComponent } from './card-game/card-overview/card-overview.component';


@NgModule({
  imports: [
    CommonModule,
    ShardModule,
    FieldsetModule,
    CardModule,
    ButtonModule
  ],
  declarations: [
    OverviewComponent,
    DashboardComponent,
    LogoutSuccessByeComponent,
    LoginSuccessWelcomeComponent,
    WelcomeComponent,
    CalendarComponent,
    CardOverviewComponent,
  ],
  exports: [
    OverviewComponent,
    DashboardComponent,
    LogoutSuccessByeComponent,
    LoginSuccessWelcomeComponent,
    WelcomeComponent,
    CalendarComponent,
    CardOverviewComponent,
  ]
})
export class ViewModule {
}
