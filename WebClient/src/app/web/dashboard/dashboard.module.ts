import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {SelectCardComponent} from './items/select-card/select-card.component';
import {FormsModule} from '@angular/forms';
import {UserManagementComponent} from '../../core/user/user-management.component';
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
    VisitManagementComponent,
    CreateVisitComponent
  ],
  providers: [RoleGuard, UserRestService, RoleRestService]
})
export class DashboardModule {
}
