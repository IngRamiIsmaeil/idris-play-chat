import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/components/common/menuitem';

@Component({
  selector: 'idrisgames-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})

export class BreadcrumbComponent implements OnInit { items: MenuItem[];
  constructor() { }
  @Input()
  public menusArray: MenuItem[];
  ngOnInit() {

  }

}
