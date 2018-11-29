import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdministrationComponent} from './administration.component';
import {UserListComponent} from '../../core/user/user-list/user-list.component';

export const administrationRoutes: Routes = [
  {
    path: '',
    component: AdministrationComponent,
    children: [
      {path: '', redirectTo: 'office-user-list', pathMatch: 'full'},
      {
        path: 'office-user-list',
        component: UserListComponent,
        data: {
          userType: 'office'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(administrationRoutes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule {
}
