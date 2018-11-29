import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdministrationComponent} from './administration.component';
import {DirectiveModule} from '../../modules/directive.module';
import {AdministrationRoutingModule} from './administration-routing.module';
import {UserRestService} from '../../services/rest/user-rest.service';
import {RoleRestService} from '../../services/rest/role-rest.service';
import {UserAdminComponentsModule} from '../../modules/user-admin-components.module';

@NgModule({
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    DirectiveModule,
    UserAdminComponentsModule
  ],
  declarations: [AdministrationComponent],
  providers: [UserRestService, RoleRestService]
})
export class AdministrationModule {
}
