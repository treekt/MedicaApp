import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {AuthGuard} from '../services/guards/auth-guard.service';
import {RoleGuard} from '../services/guards/role-guard.service';
import {CreateOfficeUserComponent} from "../core/user/user-management/create-office-user/create-office-user.component";
import {CreateRoleComponent} from "../core/role/role-management/create-role/create-role.component";
import {RoleListComponent} from '../core/role/role-management/role-list/role-list.component';
import {RoleManagementComponent} from '../core/role/role-management/role-management.component';
import {UserManagementComponent} from '../core/user/user-management/user-management.component';


export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [RoleGuard],
        data: {expectedRole: 'user'},
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [RoleGuard],
        data: {
          expectedRole: 'admin',
        },
        children: [
          {
            path: 'user-management',
            component: UserManagementComponent,
          },
          {
            path: 'role-management',
            component: RoleManagementComponent,
          }]
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
