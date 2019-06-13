import { Component, OnInit, Input, Optional, Host } from '@angular/core';
import {SatPopover} from '@ncstate/sat-popover'
import {filter} from 'rxjs/operators';
@Component({
  selector: 'idrisgames-edit-cell',
  templateUrl: './edit-cell.component.html',
  styleUrls: ['./edit-cell.component.scss']
})
export class EditCellComponent implements OnInit {
  @Input() saveBtnToolTip = 'Speichern';
  @Input() cancelBtnToolTip = 'Abbrechen';
  @Input() title = 'Ändere Value for';
  @Input() forColumn: string;

  @Input()
  get value(): string {
    return this._value;
  }

  set value(v: string) {
    this._value = v;
  }

  _value = '';
  formValue = '';

  constructor(@Optional() @Host() public popover: SatPopover) { }

  ngOnInit() {
    if (this.popover) {
      this.popover.closed.pipe(filter(v => v === null))
        .subscribe(() => this.formValue = this.value || '');
    }
  }

  onSubmit() {
    if (this.popover) {
      this.popover.close(this.formValue);
    }
  }

  onCancel() {
    if (this.popover) {
      this.popover.close();
    }
  }

  getTitle() {
    if (this.title && this.forColumn) {
      return this.title + ' ' + this.forColumn;
    } else if (this.title) {
      return this.title;
    } else {
      return 'Ändere Value'
    }
  }
}
