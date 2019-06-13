import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  public errorMessage: Array<String> = new Array<String>();
  public errorStatus: string;
  constructor() { }
}
