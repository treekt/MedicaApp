import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './auth/login/login.component';
import {PageNotFoundComponent} from './errors/page-not-found/page-not-found.component';
import {TokenInterceptor} from './interceptors/token.interceptor';
import {CoreComponent} from "./core/core.component";
import {SemanticDropdownDirective} from "./directives/semantic-dropdown.directive";
import {SemanticCalendarDirective} from "./directives/semantic-calendar.directive";
import {AuthGuard} from "./services/guards/auth-guard.service";
import {AuthService} from "./services/auth.service";

@NgModule({
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    CoreComponent,
    PageNotFoundComponent,
    SemanticDropdownDirective,
    SemanticCalendarDirective
  ],
  providers: [
    AuthGuard,
    AuthService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
