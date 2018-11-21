import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {AuthGuard} from '../services/guards/auth-guard.service';
import {AuthService} from '../services/auth.service';
import {SelectCardComponent} from './items/select-card/select-card.component';
import {RoleGuard} from '../services/guards/role-guard.service';
import {CreateOfficeUserComponent} from '../core/user/create-office-user/create-office-user.component';
import {CreateRoleComponent} from '../core/role/create-role/create-role.component';
import {UserRestService} from '../services/rest/user-rest.service';
import {RoleRestService} from '../services/rest/role-rest.service';
import {RoleListComponent} from '../core/role/role-list/role-list.component';
import {RoleManagementComponent} from '../core/role/role-management/role-management.component';
import {UserManagementComponent} from '../core/user/user-management/user-management.component';
import {FormsModule} from '@angular/forms';
import { CreateUserComponent } from '../core/user/create-user/create-user.component';
import { UserListComponent } from '../core/user/user-list/user-list.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatMenuModule, MatButtonModule, MatIconModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  declarations: [
    LayoutComponent,
    SelectCardComponent,
    UserManagementComponent,
    RoleManagementComponent,
    CreateOfficeUserComponent,
    CreateRoleComponent,
    RoleListComponent,
    CreateUserComponent,
    UserListComponent],
  providers: [AuthGuard, AuthService, RoleGuard, UserRestService, RoleRestService]
})
export class DashboardModule {
}
