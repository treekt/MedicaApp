import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile.component';
import {SchedulerComponent} from '../../core/scheduler/scheduler.component';
import {UserDetailsComponent} from '../../core/user/user-details/user-details.component';

export const profileRoutes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {path: '', redirectTo: 'scheduler', pathMatch: 'full'},
      {path: 'scheduler', component: SchedulerComponent},
      {path: 'details', component: UserDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(profileRoutes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
}
