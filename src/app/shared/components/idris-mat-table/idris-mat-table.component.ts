import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material'
import {IdrisDto} from '../../entities/idris-dto';
import {IdrisTableService} from '../../../services/idris-table.service';
import {ContextMenu, MenuItem} from 'primeng/primeng';
import * as $ from "jquery";
import {cItem} from './row-context-menu/row-context-menu.component';

@Component({
  selector: 'idrisgames-idris-mat-table',
  templateUrl: './idris-mat-table.component.html',
  styleUrls: ['./idris-mat-table.component.scss']
})
export class IdrisMatTableComponent implements OnInit, AfterViewInit {
  @Input() dataSource: MatTableDataSource<IdrisDto|any>;

  @Input() idrisTableService: IdrisTableService<IdrisDto>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(ContextMenu) contextMenu: ContextMenu;

  @ViewChild('container') containerViewChild: ElementRef;

  private contextMenuEvent: MouseEvent;
  private currentRowOnContextMenu: any;
  private prviousRowOnContextMenu: any;

  private dummyCMItems: cItem[] = [
    {label: 'CM_ITEM(3)', icon: 'fa fa-text-width', command: (e) => {}, subitems: null}
  ];
  private dummyTableHeaderColumns = ['id', 'name', 'progress', 'color'];

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit(): void {
    /*this.contextMenu.position = () => {
      const container = $('#mTableContent').find('table>tbody')[0];
      console.log('test container ', container);
      if (this.prviousRowOnContextMenu) {
        this.prviousRowOnContextMenu.selected = false;
      }

      const left = this.contextMenuEvent.layerX;
      const top = this.contextMenuEvent.layerY;

      let leftPage = this.contextMenuEvent.pageX;
      let topPage = this.contextMenuEvent.pageY;

      const containerW = container.clientWidth;
      const containerH = container.clientHeight;

      const cmW = this.contextMenu.containerViewChild.nativeElement.offsetParent ? this.contextMenu.containerViewChild.nativeElement.offsetParent.offsetWidth : this.contextMenu.domHandler.getHiddenElementOuterWidth(this.contextMenu.containerViewChild.nativeElement);
      const cmH = this.contextMenu.containerViewChild.nativeElement.offsetParent ? this.contextMenu.containerViewChild.nativeElement.offsetParent.offsetHeight: this.contextMenu.domHandler.getHiddenElementOuterHeight(this.contextMenu.containerViewChild.nativeElement);

      if ((left +cmW) > containerW) {
        leftPage -= cmW;
      }

      if ((top + cmH) > containerH) {
        topPage -= cmH;
      }

      this.contextMenu.containerViewChild.nativeElement.style.left = leftPage + 'px';
      this.contextMenu.containerViewChild.nativeElement.style.top = topPage + 'px';
      this.currentRowOnContextMenu.selected = true;
    };*/
  }

  get materialTableColumnsField(): string[] {
    if (this.idrisTableService && this.idrisTableService.columnDefs) {
      return this.idrisTableService.columnDefs.map(c => c.field);
    } else {
      // we are in dummy table
      return this.dummyTableHeaderColumns;
    }
  }

  get materialTableColumnFilters() : string[] {
    if (this.idrisTableService && this.idrisTableService.columnDefs) {
      return this.idrisTableService.columnDefs.map(c => c.field + '_filter');
    } else {
      // we are in dummy table
      return this.dummyTableHeaderColumns.map(c => c + '_filter');
    }
  }

  getColumnsHeader(col: string): string{
    if (this.idrisTableService && this.idrisTableService.columnDefs) {
      return this.idrisTableService.columnDefs.filter(c => c.field === col).map(c => c.label)[0];
    } else {
      // we are in dummy table
      return col.toUpperCase();
    }
  }

  getFilterColumnName(col: string): string{
    if (col) {
      const indexOfFilter = col.indexOf('_filter');
      if (indexOfFilter >= 0){
        return col.substr(0, indexOfFilter);
      }
    }
    return col;
  }

  applyGlobalFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyColumnsFilter(filterValue: string, col) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = (t, s) => String(t[col]).trim().toLowerCase() === s;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  update(rowData: any, col:string, event: string) {
    if (event){
      rowData[col] = event;
    }
  }

  onContextMenu(event, row) {
    /*this.prviousRowOnContextMenu = this.currentRowOnContextMenu;
    this.currentRowOnContextMenu = row;
    event.preventDefault();
    this.contextMenuEvent = event;
    this.contextMenu.show(event.originalEvent);*/

  }
  onContextMenu_2(pRow: any, e){
    pRow.open();
    e.preventDefault();
  }

  getContextMenuItems (): cItem[] {
    const cm =  new Array<cItem>();
    cm.push(
      {label: 'CM_ITEM(1)', icon: 'fa fa-hourglass-start', command: (e) => {}, subitems: null}
      );
    cm.push(
      {label: 'CM_ITEM(3)', icon: 'fa fa-text-width', command: (e) => {}, subitems: null}
      );
    return cm;
  }
  getRowBackgroundColor(row): string{
    return row && row.selected ? '#fff5ec' : '';
  }
}
