import {IdrisDto} from './idris-dto';

export class CalendarEvent extends IdrisDto{
  private _title: string = null;
  private _start: string = null;
  private _end: string = null;

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  get start(): string{
    return this._start;
  }

  set start(start: string) {
    this._start = start;
  }

  get end(): string {
    return this._end;
  }

  set end(end: string){
    this._end = end;
  }
}
