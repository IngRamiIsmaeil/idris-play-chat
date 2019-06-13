import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { ErrorService } from './error.service';

export type HandleError = <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;

/** Handles HttpClient errors */
@Injectable()
export class HttpErrorHandler {
  _operationName : string;
  _serviceName : string;

  set operationName( operationName: string) {
    this._operationName = operationName;
  }

  get operationName(): string {
    return this._operationName;
  }

  set serviceName( serviceName: string) {
    this._serviceName = serviceName;
  }

  get serviceName(): string {
    return this._serviceName;
  }

  constructor(private errorService: ErrorService) { }

  /** Create handleError function that already knows the service name */
  createHandleError = () => <T>
  (operation = 'operation', result = {} as T) => this.handleError( result);

  /**
   * @param serviceName: name of the data service
   * @param result: optional value to return as the observable result
   */
  handleError<T> (result = {} as T) {

    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error); // log to console instead

      const message = (error.error instanceof ErrorEvent) ?
        error.error.message :
        `error code: ${error.status}, error message: "${error.message}"`;

      // Todo -> Transforming error for user consumption
      this.errorService.errorMessage.push(`${this.serviceName ? this.serviceName : 'unnamed service'} -> ${this.operationName ? this.operationName : 'unamed method'} failed.\n  Message: ${message}`);
      // -> Return a safe result.
      return of( result );
    };
  }
}
