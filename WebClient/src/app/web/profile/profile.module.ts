import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileComponent} from './profile.component';
import {FullCalendarModule} from 'ng-fullcalendar';
import {SchedulerComponent} from '../../core/scheduler/scheduler.component';
import {CreateScheduleComponent} from '../../core/scheduler/create-event/create-schedule.component';
import {CalendarComponent} from '../../core/scheduler/calendar/calendar.component';
import {UserDetailsComponent} from '../../core/user/user-details/user-details.component';
import {DirectiveModule} from '../../modules/directive.module';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FullCalendarModule,
    DirectiveModule
  ],
  declarations: [
    ProfileComponent,
    UserDetailsComponent,
    SchedulerComponent,
    CreateScheduleComponent,
    CalendarComponent,
  ],
  providers: []
})
export class ProfileModule {
}