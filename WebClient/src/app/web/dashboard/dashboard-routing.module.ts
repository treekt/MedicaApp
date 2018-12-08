import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateUserComponent} from '../../core/user/create-user/create-user.component';
import {UserManagementComponent} from '../../core/user/user-management.component';
import {UserListComponent} from '../../core/user/user-list/user-list.component';
import {VisitManagementComponent} from '../../core/visit/visit-management.component';
import {CreateVisitComponent} from '../../core/visit/create-visit/create-visit.component';
import {DashboardComponent} from './dashboard.component';
import {MakeVisitComponent} from '../../core/visit/make-visit/make-visit.component';


export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'visit-management',
        component: VisitManagementComponent,
        children: [
          {path: '', redirectTo: 'create-visit', pathMatch: 'full'},
          {
            path: 'create-visit',
            component: CreateVisitComponent,
            // data: {
            //   isOfficeUser: false
            // }
          },
          {
            path: 'make-visit',
            component: MakeVisitComponent,
            // data: {
            //   isOfficeUser: false
            // }
          }
        ],
      },
      {
        path: 'user-management',
        component: UserManagementComponent,
        children: [
          {path: '', redirectTo: 'user-list', pathMatch: 'full'},
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
