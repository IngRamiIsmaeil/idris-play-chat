import { Component, AfterContentInit, Input, ContentChild, HostBinding } from '@angular/core';
import { InputWithIconDirective } from '../input-with-icon.directive';

@Component({
  selector: 'app-input-with-icon',
  templateUrl: './input-with-icon.component.html',
  styleUrls: ['./input-with-icon.component.scss']
})
export class InputWithIconComponent implements AfterContentInit {
  @Input()
  icon: string;

  @Input()
  fontSize: string;

  @ContentChild(InputWithIconDirective)
  input: InputWithIconDirective;

  ngAfterContentInit(): void {
    if (!this.input) {
      console.error('this custom input needs an input inside its content');
    }
  }

  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.input ? this.input.focus : false;
  }

  get classes() {
    const cssClasses = {};
    if (this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }
    return cssClasses;
  }
}
