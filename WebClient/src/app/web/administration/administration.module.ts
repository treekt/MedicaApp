import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdministrationComponent} from './administration.component';
import {DirectiveModule} from '../../modules/directive.module';
import {AdministrationRoutingModule} from './administration-routing.module';
import {UserRestService} from '../../services/rest/user-rest.service';
import {RoleRestService} from '../../services/rest/role-rest.service';
import {UserAdminComponentsModule} from '../../modules/user-admin-components.module';
import {CreateRoleComponent} from '../../core/role/create-role/create-role.component';
import {RoleListComponent} from '../../core/role/role-list/role-list.component';
import {FormsModule} from "@angular/forms";

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
    RoleListComponent, ],
  providers: [UserRestService, RoleRestService]
})
export class AdministrationModule {
}
