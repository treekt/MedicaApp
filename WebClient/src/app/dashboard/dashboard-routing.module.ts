import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {AuthGuard} from '../services/guards/auth-guard.service';
import {UserManagementComponent} from '../core/user/user-management/user-management.component';
import {RoleManagementComponent} from '../core/role/role-management/role-management.component';
import {CreateUserComponent} from '../core/user/create-user/create-user.component';
import {UserListComponent} from '../core/user/user-list/user-list.component';
import {CreateRoleComponent} from '../core/role/create-role/create-role.component';
import {RoleListComponent} from '../core/role/role-list/role-list.component';


export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      {
        path: 'user-management',
        component: UserManagementComponent,
        children: [
          {path: '', redirectTo: 'user-list', pathMatch: 'full'},
          {
            path: 'create-user',
            component: CreateUserComponent
          },
          {
            path: 'user-list',
            component: UserListComponent
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
            component: RoleListComponent,
            data: {
              something: 'kurwixWzdecia'
            }
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
