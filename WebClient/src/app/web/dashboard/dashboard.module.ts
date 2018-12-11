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
import {DirectiveModule} from '../../shared/modules/directive.module';
import {UserAdminComponentsModule} from '../../shared/modules/user-admin-components.module';
import { MakeVisitComponent } from '../../core/visit/make-visit/make-visit.component';
import { VisitListComponent } from '../../core/visit/visit-list/visit-list.component';
import { HomeComponent } from '../../core/home/home.component';
import { DeseaseListComponent } from '../../core/archive/desease-list/desease-list.component';
import { MedicinesListComponent } from '../../core/archive/medicines-list/medicines-list.component';
import { VisitDetailsComponent } from '../../core/visit/visit-details/visit-details.component';
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
    CreateVisitComponent,
    MakeVisitComponent,
    VisitListComponent,
    HomeComponent,
    DeseaseListComponent,
    MedicinesListComponent,
    VisitDetailsComponent,
  ],
  providers: [RoleGuard, UserRestService, RoleRestService, UserRestService]
})
export class DashboardModule {
}
