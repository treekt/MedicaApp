import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {SelectCardComponent} from './items/select-card/select-card.component';
import {CreateRoleComponent} from '../role/create-role/create-role.component';
import {RoleListComponent} from '../role/role-list/role-list.component';
import {RoleManagementComponent} from '../role/role-management.component';
import {UserManagementComponent} from '../user/user-management.component';
import {FormsModule} from '@angular/forms';
import {CreateUserComponent} from '../user/create-user/create-user.component';
import {UserListComponent} from '../user/user-list/user-list.component';
import {VisitManagementComponent} from '../visit/visit-management.component';
import {CreateVisitComponent} from '../visit/create-visit/create-visit.component';
import {AuthService} from "../../services/auth.service";
import {RoleGuard} from "../../services/guards/role-guard.service";
import {UserRestService} from "../../services/rest/user-rest.service";
import {RoleRestService} from "../../services/rest/role-rest.service";

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ],
  declarations: [
    LayoutComponent,
    SelectCardComponent,
    UserManagementComponent,
    RoleManagementComponent,
    CreateUserComponent,
    CreateRoleComponent,
    RoleListComponent,
    CreateUserComponent,
    UserListComponent,
    VisitManagementComponent,
    CreateVisitComponent,
  ],
  providers: [AuthService, RoleGuard, UserRestService, RoleRestService]
})
export class DashboardModule {
}
