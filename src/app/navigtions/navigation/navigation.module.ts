import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NavigationRoutingModule
  ],
  declarations: [],
  exports: [NavigationRoutingModule]
})
export class NavigationModule { }
