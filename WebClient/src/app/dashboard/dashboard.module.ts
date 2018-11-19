import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {AuthGuard} from '../services/guards/auth-guard.service';
import {AuthService} from '../services/auth.service';
import {SelectCardComponent} from './items/select-card/select-card.component';
import {RoleGuard} from '../services/guards/role-guard.service';
import {CreateOfficeUserComponent} from '../core/user/user-management/create-office-user/create-office-user.component';
import {CreateRoleComponent} from '../core/role/role-management/create-role/create-role.component';
import {UserRestService} from '../services/rest/user-rest.service';
import {RoleRestService} from '../services/rest/role-rest.service';
import {RoleListComponent} from '../core/role/role-management/role-list/role-list.component';
import {RoleManagementComponent} from '../core/role/role-management/role-management.component';
import {UserManagementComponent} from '../core/user/user-management/user-management.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ],
  declarations: [
    LayoutComponent,
    HomeComponent,
    AdminComponent,
    SelectCardComponent,
    UserManagementComponent,
    RoleManagementComponent,
    CreateOfficeUserComponent,
    CreateRoleComponent,
    RoleListComponent],
  providers: [AuthGuard, AuthService, RoleGuard, UserRestService, RoleRestService]
})
export class DashboardModule {
}
