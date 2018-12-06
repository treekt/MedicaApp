import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdministrationComponent} from './administration.component';
import {UserListComponent} from '../../core/user/user-list/user-list.component';
import {CreateUserComponent} from '../../core/user/create-user/create-user.component';
import {CreateRoleComponent} from '../../core/role/create-role/create-role.component';
import {RoleListComponent} from '../../core/role/role-list/role-list.component';
import {SchedulerComponent} from '../../core/scheduler/scheduler.component';

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
      {
        path: 'create-office-user',
        component: CreateUserComponent,
        data: {
          isOfficeUser: true
        }
      },
      {
        path: 'office-user-scheduler',
        component: SchedulerComponent,
        data: {
          forAdministration: true
        }
      },
      {
        path: 'create-role',
        component: CreateRoleComponent
      },
      {
        path: 'role-list',
        component: RoleListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(administrationRoutes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule {
}
