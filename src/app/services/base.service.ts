import { Injectable } from '@angular/core';
import {MessageService} from 'primeng/components/common/messageservice';
import {Message} from 'primeng/components/common/api';
import {ConfigService} from './config.service';
import {Observable} from 'rxjs/Observable';
import {CalendarEvent} from '../shared/entities/calendar-event';
import {catchError, retry} from 'rxjs/operators';
import {User} from '../shared/entities/user';
import {RestService} from './rest.service';
import {HttpClient} from '@angular/common/http';
import {HttpErrorHandler} from './http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T>{
  public msgs: Message[] = [];
  messageLife = 2000;

  constructor(
    protected messageService: MessageService,
    protected httpClient: HttpClient,
    protected httpErrorHandler: HttpErrorHandler,
    protected   configService: ConfigService
  ) {
    super(httpClient, httpErrorHandler, configService)
  }
}
