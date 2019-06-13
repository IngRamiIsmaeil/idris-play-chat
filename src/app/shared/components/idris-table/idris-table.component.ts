import {AfterContentInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {IdrisTableService} from '../../../services/idris-table.service';
import {Table} from 'primeng/table';
import * as $ from 'jquery';

@Component({
  selector: 'idrisgames-idris-table',
  templateUrl: './idris-table.component.html',
  styleUrls: ['./idris-table.component.scss']
})
export class IdrisTableComponent<T> implements OnInit, AfterContentInit {
  @Input() tableService: IdrisTableService<T>;
  @Input() multiselect: boolean = true;
  @ViewChild('dt') idrisTable;
  selectedDataExport: any;
  header: any;
  tableMaxHeight: string;
  filterMatchMode = "contains";
  filterMatchModes: any[];
  selectDataExport = false;
  constructor() { }

  ngOnInit() {
    this.filterMatchModes = [];
    this.filterMatchModes.push(
      {label: 'contains', value: 'contains'},
      {label: 'equals', value: 'equals'},
      {label: 'startsWith', value: 'startsWith'},
      {label: 'endsWith', value: 'endsWith'},
      {label: 'in', value: 'in'},
    )

  }

  ngAfterContentInit(): void {

    if(undefined !== this.tableService && null !== this.tableService) {
      this.tableService.initializeClassVariables();
      this.tableService.selectedColumns = this.tableService.columnDefs.slice(0, this.tableService.columnDefs.length);
    }
  }

  public resize(event, offset) {
    if (undefined !== this.idrisTable && null !== this.idrisTable) {
      const tableNative = this.idrisTable.el.nativeElement;
      const height = document.firstElementChild.clientHeight;
      const up = $('idris-table');
      if (undefined !== up && null !== up && undefined !== $(up).position()){
        const top = $(up).position().top();
        const tableCaptionHeight = tableNative.childern[0].childern[0].clientHeight;
        const tableHeaderHeight = tableNative.childern[0].childern[1].childern[0].clientHeight;
        const tablePaginatorHeightt = tableNative.childern[0].childern[2].childern[0].clientHeight;
        const footer = document.getElementById('app-entry-footer').clientHeight;
        this.tableMaxHeight=
          height - (top + tableCaptionHeight + tableHeaderHeight + tablePaginatorHeightt + offset + footer) + 'px';
      }
    }
  }

  changeFilterMatchMode(table: Table, col: any, event: any){
    if (undefined !== col.filter ) {
      if (null !== col.filter) {
        if (col.filterMatchMode === event.value){
          return;
        }
        if (['contains', 'equals', 'startWith', 'endWith'].indexOf(col.filterMatchMode) !== -1 ) {
          if (['in'].indexOf(event.value) !== -1){
            col.filter = undefined;
          }
        } else {
          col.filter = undefined;
        }
        col.filterMatchMode = event.value;
        this.doFilter(table, col);
      }
    } else {
      col.filterMatchMode = event.value;
    }
  }

  doGlobaleFilter(table: Table, event: any, match: string){
    table.filterGlobal(event.target.value, match);
  }
  resetFilter(table: Table, input: any): void{
    this.tableService.columnDefs.forEach(c=>{c.filter = undefined});
    table.reset();
    input.value = '';
  }
 doFilter(table: Table, col: any) {
    table.filter(col.filter, col.field,col.filterMatchMode);
  }
}
