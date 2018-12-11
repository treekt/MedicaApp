import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileComponent} from './profile.component';
import {UserDetailsComponent} from '../../core/user/user-details/user-details.component';
import {DirectiveModule} from '../../shared/modules/directive.module';
import {FormsModule} from '@angular/forms';
import {ScheduleRestService} from '../../services/rest/schedule-rest.service';
import {UserAdminComponentsModule} from '../../shared/modules/user-admin-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProfileRoutingModule,
    DirectiveModule,
    UserAdminComponentsModule
  ],
  declarations: [
    ProfileComponent,
    UserDetailsComponent
  ],
  providers: [ScheduleRestService]
})
export class ProfileModule {
}
