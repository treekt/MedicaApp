import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {SelectCardComponent} from './items/select-card/select-card.component';
import {FormsModule} from '@angular/forms';
import {UserManagementComponent} from '../../core/user/user-management.component';
import {RoleManagementComponent} from '../../core/role/role-management.component';
import {CreateUserComponent} from '../../core/user/create-user/create-user.component';
import {CreateRoleComponent} from '../../core/role/create-role/create-role.component';
import {RoleListComponent} from '../../core/role/role-list/role-list.component';
import {UserRestService} from '../../services/rest/user-rest.service';
import {RoleRestService} from '../../services/rest/role-rest.service';
import {RoleGuard} from '../../services/guards/role-guard.service';
import {VisitManagementComponent} from '../../core/visit/visit-management.component';
import {CreateVisitComponent} from '../../core/visit/create-visit/create-visit.component';
import {DashboardComponent} from './dashboard.component';
import {DirectiveModule} from '../../modules/directive.module';
import {UserAdminComponentsModule} from '../../modules/user-admin-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    DirectiveModule,
    UserAdminComponentsModule
  ],
  declarations: [
    DashboardComponent,
    SelectCardComponent,
    UserManagementComponent,
    RoleManagementComponent,
    CreateUserComponent,
    CreateRoleComponent,
    RoleListComponent,
    VisitManagementComponent,
    CreateVisitComponent
  ],
  providers: [RoleGuard, UserRestService, RoleRestService]
})
export class DashboardModule {
}
