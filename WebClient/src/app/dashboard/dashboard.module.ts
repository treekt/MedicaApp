import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {AuthGuard} from '../services/guards/auth-guard.service';
import {AuthService} from '../services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [LayoutComponent, HomeComponent, AdminComponent],
  providers: [AuthGuard, AuthService]
})
export class DashboardModule { }
