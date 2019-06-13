import { Injectable } from '@angular/core';
import {HandleError, HttpErrorHandler} from './http-error-handler.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ConfigService} from './config.service';
import { catchError, retry } from 'rxjs/operators';
import {CalendarEvent} from '../shared/entities/calendar-event';
import {User} from '../shared/entities/user';

@Injectable({
  providedIn: 'root'
})
export abstract class RestService<T>{
  private handleError: HandleError;
  constructor(
    protected httpClient: HttpClient,
    protected httpErrorHandler: HttpErrorHandler,
    protected configService: ConfigService
  ) {
    this.handleError = this.httpErrorHandler.createHandleError();
  }

  public restGetObject<T>(restUrl: string, operationName: string): Observable<T> {
    return this.httpClient.get<T>(this.configService.config.rest_url + restUrl).pipe(
      retry(3),
      catchError(this.handleError(operationName, {} as T))
    );
  }

  public restGetObjects<T>(restUrl: string, operationName: string): Observable<T|T[]> {
    return this.httpClient.get<T[]>(this.configService.config.rest_url + restUrl).pipe(
      retry(3),
      catchError(this.handleError(operationName, [] as T[]))
    );
  }

  public restPostObject<T>(restUrl: string, operationName: string, body: T){
    const bodyJson = JSON.stringify(body);
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'Accept': 'application/json'});
    return this.httpClient.post(this.configService.config.rest_url + restUrl, bodyJson, {headers:headers}).pipe(
      retry(3),
      catchError(this.handleError(operationName, {} as T))
    );
  }

  public restPostObjects<T>(restUrl: string, operationName: string, body: T[]){
    const bodyJson = JSON.stringify(body);
    return this.httpClient.post(this.configService.config.rest_url + restUrl, bodyJson).pipe(
      retry(3),
      catchError(this.handleError(operationName, [] as T[]))
    );
  }

  /* local Files Test purpose */
  public getCalendarEventsFromFile(): Observable<CalendarEvent[]> {

    return this.httpClient.get<CalendarEvent[]>(this.configService.config.calendar_events).pipe(
      retry(3),
      catchError(this.handleError('getCalendarEventsFromFile', [] as CalendarEvent[]))
    );
  }

  public getUserListFromFile(): Observable<User[]> {

    return this.httpClient.get<User[]>(this.configService.config.user_list).pipe(
      retry(3),
      catchError(this.handleError('getCalendarEventsFromFile', [] as User[]))
    );
  }
}
