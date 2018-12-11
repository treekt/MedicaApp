import {Component, OnInit, ViewChild} from '@angular/core';
import {Options} from 'fullcalendar';
import {SchedulerEvent} from '../../models/scheduler';
import * as moment from 'moment';
import {User} from '../../models/user';
import {ScheduleRestService} from '../../services/rest/schedule-rest.service';
import {CalendarComponent} from 'ng-fullcalendar';
import {ActivatedRoute} from '@angular/router';
import {UserRestService} from '../../services/rest/user-rest.service';

declare var $: any;

@Component({
  selector: 'app-calendar',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  events: SchedulerEvent[];

  forAdministration: boolean;

  officeUser: User;
  officeUsers: User[];

  selectedEvent: any;
  event: SchedulerEvent;
  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor(private userRest: UserRestService,
              private scheduleRest: ScheduleRestService,
              private route: ActivatedRoute) {

    this.route.data.subscribe(data => {
      this.forAdministration = data['forAdministration'];
      this.initSchedulerOwner();
    });


  }


  formatDate(date) {
    return moment(date).format('YYYY-MM-DD HH:mm');
  }

  ngOnInit() {
  }

  initSchedulerOwner() {
    if (this.forAdministration) {
      this.userRest.getAllOfficeUsers().subscribe(officeUsersResult => this.officeUsers = officeUsersResult);
    } else {
      this.userRest.getAuthenticatedUser().subscribe(userResult => {
        this.officeUser = userResult;
        this.initEvents();
        this.initCalendarOptions();
      });
    }
  }

  initEvents() {
    this.scheduleRest.getAllSchedulesByUserId(this.officeUser.id).subscribe(
      schedulerEventsResult => this.events = schedulerEventsResult
    );
  }

  initCalendarOptions() {
    this.calendarOptions = {
      editable: true,
      eventLimit: false,
      selectable: true,
      selectHelper: true,
      // select: function (start) {
      //   if (start.isBefore(moment())) {
      //     $('#ucCalendar').fullCalendar('unselect');
      //     return false;
      //   }
      // },
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay, listWeek'
      },
      noEventsMessage: 'Brak wydarzeń do wyswietlenia',
      allDayText: 'Cały dzień',
      events: this.events,
      displayEventTime: false,
      slotLabelFormat: 'H:mm',
      slotDuration: moment.duration('00:15:00'),
      timeFormat: 'H:mm',
      minTime: moment.duration('07:00:00'),
      maxTime: moment.duration('18:00:00'),
      nowIndicator: true,
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


  onSelectedTime(selectedRangeTime) {
    this.event = new SchedulerEvent();
    this.event.userId = this.officeUser.id;
    this.event.start = selectedRangeTime.start;
    this.event.end = selectedRangeTime.end;
    $('.ui.modal').modal('show');
  }


  createEvent() {
    const type = this.event.type;
    console.log(this.event.type);
    if (type === '0') {
      this.event.title = 'Praca';
      this.event.color = 'green';
    } else if (type === '1') {
      this.event.title = 'Urlop';
      this.event.color = '#3366CC';
    } else if (type === '2') {
      this.event.title = 'Nagły przypadek';
      this.event.color = 'orange';
    }

    this.event.start = this.formatDate(this.event.start);
    this.event.end = this.formatDate(this.event.end);

    this.saveEvent();
    $('.ui.modal').modal('hide');
  }


  updateEvent(changedEvent) {
    this.event = new SchedulerEvent();

    // Mapping objects
    this.event.id = changedEvent.event.id;
    this.event.title = changedEvent.event.title;
    this.event.type = changedEvent.event.type;
    this.event.userId = changedEvent.event.userId;

    this.event.start = this.formatDate(changedEvent.event.start);
    this.event.end = this.formatDate(changedEvent.event.end);

    this.saveEvent();
  }

  clickEvent(clickedEvent) {
    this.selectedEvent = clickedEvent;
    console.log(this.selectedEvent);
  }

  saveEvent() {
    this.pushEventIntoEventList(this.event);
    this.reloadEvents();
    this.scheduleRest.saveSchedule(this.event).subscribe(() => {
    });
  }

  deleteEvent() {
    this.scheduleRest.deleteEvent(this.selectedEvent.event.id).subscribe(() => {
      console.log(this.selectedEvent);
      this.ucCalendar.fullCalendar('removeEvents', this.selectedEvent.event._id);
      this.selectedEvent = null;
    });
  }

  pushEventIntoEventList(event: SchedulerEvent) {
    if (this.events.includes(event)) {
      const index = this.events.indexOf(event);
      this.events.splice(index, 1);
    }
    this.events.push(event);
  }

  onSelectOfficeUser(userId) {
    for (const user of this.officeUsers) {
      if (user.id === userId) {
        this.officeUser = user;
        this.initEvents();
        this.initCalendarOptions();
        this.reloadEvents();
      }
    }
  }

  reloadEvents() {
    this.ucCalendar.fullCalendar('removeEvents');
    this.ucCalendar.fullCalendar('addEventSource', this.events);
  }
}
