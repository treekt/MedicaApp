import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile.component';
import {TimeTableComponent} from '../core/time-table/time-table.component';

export const profileRoutes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {path: '', redirectTo: 'time-table', pathMatch: 'full'},
      {path: 'time-table', component: TimeTableComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(profileRoutes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
}
