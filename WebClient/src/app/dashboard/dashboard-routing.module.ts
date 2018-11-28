import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateRoleComponent} from '../core/role/create-role/create-role.component';
import {CreateUserComponent} from '../core/user/create-user/create-user.component';
import {RoleListComponent} from '../core/role/role-list/role-list.component';
import {RoleManagementComponent} from '../core/role/role-management.component';
import {UserManagementComponent} from '../core/user/user-management.component';
import {UserListComponent} from '../core/user/user-list/user-list.component';
import {VisitManagementComponent} from '../core/visit/visit-management.component';
import {CreateVisitComponent} from '../core/visit/create-visit/create-visit.component';
import {DashboardComponent} from './dashboard.component';


export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'visit-management',
        component: VisitManagementComponent,
        children: [
          {path: '', redirectTo: 'create-visit', pathMatch: 'full'},
          {
            path: 'create-visit',
            component: CreateVisitComponent,
            // data: {
            //   isOfficeUser: false
            // }
          }
        ],
      },
      {
        path: 'user-management',
        component: UserManagementComponent,
        children: [
          {path: '', redirectTo: 'user-list', pathMatch: 'full'},
          {
            path: 'create-user',
            component: CreateUserComponent,
            data: {
              isOfficeUser: false
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
            path: 'patient-list',
            component: UserListComponent,
            data: {
              userType: 'default'
            }
          },
          {
            path: 'office-user-list',
            component: UserListComponent,
            data: {
              userType: 'office'
            }
          }
        ],
      },
      {
        path: 'role-management',
        component: RoleManagementComponent,
        children: [
          {path: '', redirectTo: 'role-list', pathMatch: 'full'},
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule {
}
