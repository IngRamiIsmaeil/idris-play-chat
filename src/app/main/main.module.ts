import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { MainComponent } from './main/main.component';
import {HeaderModule} from '../header/header.module';
import {FooterModule} from '../footer/footer.module';
import {ViewPortComponent} from './view-port/view-port.component';
import {NavigationModule} from '../navigtions/navigation/navigation.module';
import {IdrisMenuModule} from '../menu/idris-menu.module';

@NgModule({
  imports: [
    CommonModule,
    ScrollPanelModule,
    HeaderModule,
    FooterModule,
    NavigationModule,
    IdrisMenuModule
  ],
  declarations: [MainComponent, ViewPortComponent],
  exports: [HeaderModule, MainComponent, ViewPortComponent, FooterModule, ScrollPanelModule, NavigationModule ]
})
export class MainModule { }
