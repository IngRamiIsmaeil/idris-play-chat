import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputWithIconDirective } from './input-with-icon.directive';
import { InputWithIconComponent } from './input-with-icon/input-with-icon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InputWithIconDirective, InputWithIconComponent],
  exports: [
    InputWithIconDirective, InputWithIconComponent
  ]
})
export class SelfModule { }
