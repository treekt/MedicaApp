import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdministrationComponent} from './administration.component';
import {DirectiveModule} from '../../shared/modules/directive.module';
import {AdministrationRoutingModule} from './administration-routing.module';
import {UserRestService} from '../../services/rest/user-rest.service';
import {RoleRestService} from '../../services/rest/role-rest.service';
import {UserAdminComponentsModule} from '../../shared/modules/user-admin-components.module';
import {CreateRoleComponent} from '../../core/role/create-role/create-role.component';
import {RoleListComponent} from '../../core/role/role-list/role-list.component';
import {FormsModule} from '@angular/forms';
import { CreateVisitTypeComponent } from '../../core/visit/create-visit-type/create-visit-type.component';
import { VisitTypeListComponent } from '../../core/visit/visit-type-list/visit-type-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdministrationRoutingModule,
    DirectiveModule,
    UserAdminComponentsModule
  ],
  declarations: [
    AdministrationComponent,
    CreateRoleComponent,
    RoleListComponent,
    CreateVisitTypeComponent,
    VisitTypeListComponent
  ],
  providers: [UserRestService, RoleRestService]
})
export class AdministrationModule {
}
