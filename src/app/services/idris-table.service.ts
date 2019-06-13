import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {MessageService} from 'primeng/components/common/messageservice';
import {ConfigService} from './config.service';
import {Table} from 'primeng/table';
import {HttpClient} from '@angular/common/http';
import {HttpErrorHandler} from './http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export abstract class IdrisTableService<T> extends BaseService<T>{
  public rowData: any[];
  public selectedRows: any[];
  public selectRow: any;
  public columnDefs: any[];
  public selectedColumns: any[];
  public contextMenuItems: any[];
  public numOfRowsPaginator = 100;
  public firstPaginator: any;
  public showExportImportBtns: boolean = true;
  public loading = true;

  constructor(
    protected messageService: MessageService,
    protected httpClient: HttpClient,
    protected httpErrorHandler: HttpErrorHandler,
    protected   configService: ConfigService

  ) {
    super(messageService, httpClient, httpErrorHandler, configService);
  }

  abstract selectedRowRightClick(event);
  abstract initializeClassVariables(): void;
  abstract initializeColumnOptions();
  abstract initializeUniqueValues();
  abstract copyOriginalEditableValues();
  abstract getRowStyle(rowData: any): string;
  abstract getMetaData(event: any, rowData: any);
  abstract isThisCheckBoxDisabled(rowData: any): boolean;
  abstract editInit(rowData: any, col: any, rowIndex: any);
  abstract defineCellStyle(rowData: any, col: any): string;
  abstract editComplete(rowData: any, col: any, event);
  abstract editCancle(rowData: any, col: any, event);
  abstract selectInput(inp: any, rowIndex: any, field: any);
  abstract isHeaderCheckboxHidden(table: Table): boolean;
  abstract customSelectSame(table: Table, rowData: any);
}
