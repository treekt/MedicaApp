import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {AdminComponent} from './admin/admin.component';
import {AuthGuard} from '../services/guards/auth-guard.service';
import {RoleGuard} from '../services/guards/role-guard.service';
import {RoleManagementComponent} from '../core/role/role-management/role-management.component';
import {UserManagementComponent} from '../core/user/user-management/user-management.component';
import {DefaultComponent} from './default/default.component';
import {CreateUserComponent} from '../core/user/create-user/create-user.component';
import {UserListComponent} from '../core/user/user-list/user-list.component';


export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      {path: '', redirectTo: 'default', pathMatch: 'full'},
      {
        path: 'default',
        component: DefaultComponent,
        canActivate: [RoleGuard],
        data: {expectedRole: 'user'},
        children: [
          {
            path: 'create-user',
            component: CreateUserComponent
          },
          {
            path: 'user-list',
            component: UserListComponent
          }
        ]
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [RoleGuard],
        data: {expectedRole: 'admin'},
        children: [
          {
            path: 'user-management',
            component: UserManagementComponent
          },
          {
            path: 'role-management',
            component: RoleManagementComponent
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
