import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './core/login/login.component';
import {CoreComponent} from './core/core.component';
import {AuthGuard} from './services/guards/auth-guard.service';
import {AdminGuard} from './services/guards/admin-guard.service';


export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: CoreComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: './web/dashboard/dashboard.module#DashboardModule',
        canActivate: [AdminGuard]
      },
      {
        path: 'profile',
        loadChildren: './web/profile/profile.module#ProfileModule'
      }
      ,
      {
        path: 'administration',
        loadChildren: './web/administration/administration.module#AdministrationModule'
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
