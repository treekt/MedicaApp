import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateUserComponent} from '../../core/user/create-user/create-user.component';
import {UserManagementComponent} from '../../core/user/user-management.component';
import {UserListComponent} from '../../core/user/user-list/user-list.component';
import {VisitManagementComponent} from '../../core/visit/visit-management.component';
import {CreateVisitComponent} from '../../core/visit/create-visit/create-visit.component';
import {DashboardComponent} from './dashboard.component';
import {MakeVisitComponent} from '../../core/visit/make-visit/make-visit.component';
import {VisitListComponent} from '../../core/visit/visit-list/visit-list.component';
import {HomeComponent} from '../../core/home/home.component';
import {DeseaseListComponent} from '../../core/archive/desease-list/desease-list.component';
import {MedicinesListComponent} from '../../core/archive/medicines-list/medicines-list.component';


export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'desease-list',
        component: DeseaseListComponent,
      },
      {
        path: 'medicine-list',
        component: MedicinesListComponent,
      },
      {
        path: 'make-visit/:id',
        component: MakeVisitComponent,
      },
      {
        path: 'visit-management',
        component: VisitManagementComponent,
        children: [
          {path: '', redirectTo: 'visit-list', pathMatch: 'full'},
          {
            path: 'create-visit',
            component: CreateVisitComponent,
            data: {
              forOfficeUser: false
            }
          },
          {
            path: 'visit-list',
            component: VisitListComponent,
            data: {
              forOfficeUser: true
            }
          }
        ],
      },
      {
        path: 'user-management',
        component: UserManagementComponent,
        children: [
          {path: '', redirectTo: 'patient-list', pathMatch: 'full'},
          {
            path: 'create-user',
            component: CreateUserComponent,
            data: {
              isOfficeUser: false
            }
          },
          {
            path: 'patient-list',
            component: UserListComponent,
            data: {
              forAdministration: false,
              userType: 'default'
            }
          }
        ],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule {
}
