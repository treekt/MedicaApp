import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Options} from 'fullcalendar';
import {Schedule} from '../../../models/schedule';
import {EventService} from '../../../services/event.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  @Input()
  schedules: Schedule[];

  events: any;

  calendarOptions: Options;
  displayEvent: any;

  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.initCalendarOptions();
    this.eventService.getEvents().subscribe(result => this.events = result);
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

  initCalendarOptions() {
    this.calendarOptions = {
      editable: true,
      eventLimit: false,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
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
      ],
    };
  }

}
