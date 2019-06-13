import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfModule } from '../components/self/self.module';
import {TopHeaderComponent} from './top-header/top-header.component';
import {IdrisMenuModule} from '../menu/idris-menu.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SelfModule,
    IdrisMenuModule
  ],
  declarations: [TopHeaderComponent],
  exports: [TopHeaderComponent]
})
export class HeaderModule { }
