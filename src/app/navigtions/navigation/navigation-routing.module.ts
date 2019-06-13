import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from '../../view/user/dashboard/dashboard.component';
import {Constants} from '../../shared/diverses/constants';
import {WelcomeComponent} from '../../view/start/welcome/welcome.component';
import {CalendarComponent} from '../../view/calendar/calendar.component';
import {LoginSuccessWelcomeComponent} from '../../view/start/login-success-welcome/login-success-welcome.component';
import {OverviewComponent} from '../../view/chat/overview/overview.component';
import {CardOverviewComponent} from '../../view/card-game/card-overview/card-overview.component';
import {LogoutSuccessByeComponent} from '../../view/start/logout-success-bye/logout-success-bye.component';

const routes: Routes = [
  {path: Constants.MENUITEMS_ID.welcome_i18, component: DashboardComponent},
  {path: Constants.MENUITEMS_ID.calendar_i18, component: CalendarComponent},
  {path: Constants.MENUITEMS_ID.statistik_i18, component: LoginSuccessWelcomeComponent},
  {path: Constants.MENUITEMS_ID.chat_config_i18, component: LogoutSuccessByeComponent},
  {path: Constants.MENUITEMS_ID.play_i18, component: OverviewComponent},
  {path: Constants.MENUITEMS_ID.card_i18, component: CardOverviewComponent},
  {path: Constants.MENUITEMS_ID.config_i18, component: DashboardComponent},
  { path: '**', component: WelcomeComponent, pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
