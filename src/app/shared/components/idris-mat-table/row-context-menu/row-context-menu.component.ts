import {Component, Host, Input, OnInit, Optional} from '@angular/core';
import {SatPopover} from '@ncstate/sat-popover';
export interface cItem {
  label?: string;
  icon?: string;
  command?: (event?: any) => void;
  subitems?: cItem[];
}
@Component({
  selector: 'idrisgames-row-context-menu',
  templateUrl: './row-context-menu.component.html',
  styleUrls: ['./row-context-menu.component.scss']
})
export class RowContextMenuComponent implements OnInit {
  @Input()
  get contextMenuItems() : cItem[] {
    return this._cItems;
  }

  set contextMenuItems(items: cItem[]) {
    this._cItems = items;
  }

  private _cItems: cItem[];

  constructor(@Optional() @Host() public popover: SatPopover) { }

  ngOnInit() {
  }
}
