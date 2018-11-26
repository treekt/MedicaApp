import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileRoutingModule} from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import {FullCalendarModule} from 'ng-fullcalendar';
import { TimeTableComponent } from '../core/time-table/time-table.component';
import {EventService} from './event.service';
import { CreateEventComponent } from '../core/time-table/create-event/create-event.component';
import { CalendarComponent } from '../core/time-table/calendar/calendar.component';
import {SemanticDropdownDirective} from '../directives/semantic-dropdown.directive';
import {SemanticCalendarDirective} from '../directives/semantic-calendar.directive';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FullCalendarModule
  ],
  declarations: [
    ProfileComponent,
    TimeTableComponent,
    CreateEventComponent,
    CalendarComponent
  ],
  providers: [EventService]
})
export class ProfileModule { }
