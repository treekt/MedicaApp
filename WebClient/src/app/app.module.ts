import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './core/login/login.component';
import {TokenInterceptor} from './interceptors/token.interceptor';
import {CoreComponent} from './core/core.component';
import {AuthGuard} from './services/guards/auth-guard.service';
import {AuthService} from './services/auth.service';
import {DirectiveModule} from './modules/directive.module';

@NgModule({
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DirectiveModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    CoreComponent
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
