import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserDetailsComponent} from './user/user-details/user-details.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './auth/login/login.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {PageNotFoundComponent} from './errors/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
