import {AfterContentInit, Component, OnInit} from '@angular/core';
import {CalendarEventService} from '../../../services/calendar-event.service';


@Component({
  selector: 'idrisgames-calendar-event',
  templateUrl: './calendar-event.component.html',
  styleUrls: ['./calendar-event.component.scss'],
  providers: [CalendarEventService]
})
export class CalendarEventComponent implements OnInit, AfterContentInit {

  constructor(public calendarEventService: CalendarEventService) { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.calendarEventService.initaializeRequired();
  }

}
