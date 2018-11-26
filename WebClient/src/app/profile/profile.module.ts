import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileRoutingModule} from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import {FullCalendarModule} from 'ng-fullcalendar';
import { SchedulerComponent } from './scheduler/scheduler.component';
import {EventService} from './event.service';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FullCalendarModule
  ],
  declarations: [
    ProfileComponent,
    SchedulerComponent
  ],
  providers: [EventService]
})
export class ProfileModule { }
