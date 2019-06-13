import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputWithIcon]'
})
export class InputWithIconDirective {
  focus = false;

  @HostListener('focus')
  onFocus() {
    this.focus = true;
  }

  @HostListener('blur')
  onBlur() {
    this.focus = false;
  }

}
