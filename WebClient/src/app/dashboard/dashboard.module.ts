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
import {CreateOfficeUserComponent} from '../core/user/create-office-user/create-office-user.component';
import {CreateRoleComponent} from "../core/role/create-role/create-role.component";

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    LayoutComponent,
    HomeComponent,
    AdminComponent,
    SelectCardComponent,
    CreateOfficeUserComponent,
    CreateRoleComponent],
  providers: [AuthGuard, AuthService, RoleGuard]
})
export class DashboardModule {
}
