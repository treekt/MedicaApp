import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {AuthGuard} from '../../services/guards/auth-guard.service';
import {UserManagementComponent} from '../user/user-management.component';
import {RoleManagementComponent} from '../role/role-management.component';
import {CreateUserComponent} from '../user/create-user/create-user.component';
import {UserListComponent} from '../user/user-list/user-list.component';
import {CreateRoleComponent} from '../role/create-role/create-role.component';
import {RoleListComponent} from '../role/role-list/role-list.component';
import {CreateVisitComponent} from '../visit/create-visit/create-visit.component';
import {VisitManagementComponent} from '../visit/visit-management.component';


export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: LayoutComponent,
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
            path: 'user-list',
            component: UserListComponent,
            data: {
              onlyOfficeUsers: true
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
