import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  view = 'month';

  viewDate: Date = new Date();

  events: CalendarEvent[] = [];
  constructor() { }

  ngOnInit() {
  }

}
