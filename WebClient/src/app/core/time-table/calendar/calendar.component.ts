import {Component, OnInit, ViewChild} from '@angular/core';
import {Options} from 'fullcalendar';
import {EventService} from '../../../profile/event.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendarOptions: Options;
  displayEvent: any;
  events = null;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor(protected eventService: EventService) {
  }

  ngOnInit() {
    this.calendarOptions = {
      editable: true,
      eventLimit: false,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      events: [],
      allDaySlot: false,
      firstDay: 1,
      buttonText: {
        today: 'Dzisiaj',
        month: 'Miesiąc',
        week: 'Tydzień',
        day: 'Dzień',
        list: 'Lista'
      },
      monthNames: [
        'Styczen', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec',
        'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'
      ],
      monthNamesShort: [
        'Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Czer',
        'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'
      ],
      dayNames: [
        'Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobote'
      ],
      dayNamesShort: [
        'Nie', 'Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob'
      ]
    };
  }

  loadevents() {
    this.eventService.getEvents().subscribe(data => {
      this.events = data;
    });
  }

  clickButton(model: any) {
    this.displayEvent = model;
  }

  dayClick(model: any) {
    console.log(model);
  }

  eventClick(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay
        // other params
      },
      duration: {}
    };
    this.displayEvent = model;
  }

  updateEvent(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
        // other params
      },
      duration: {
        _data: model.duration._data
      }
    };
    this.displayEvent = model;
  }

}
