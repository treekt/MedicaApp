import {NgModule, TemplateRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FullCalendarModule} from 'ng-fullcalendar';
import {DirectiveModule} from './directive.module';
import {SchedulerComponent} from '../../core/scheduler/scheduler.component';
import {CreateUserComponent} from '../../core/user/create-user/create-user.component';
import {UserListComponent} from '../../core/user/user-list/user-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FullCalendarModule,
    DirectiveModule,
  ],
  declarations: [
    UserListComponent,
    CreateUserComponent,
    SchedulerComponent
  ],
  exports: [
    UserListComponent,
    CreateUserComponent,
    SchedulerComponent
  ]
})
export class UserAdminComponentsModule { }
