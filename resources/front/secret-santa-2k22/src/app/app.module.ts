import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {AuthenticationModule} from './modules/authentication/authentication.module';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {APP_BASE_HREF} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpXsrfInterceptor} from './interceptors/http-xsrf.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LandingPageComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: HTTP_INTERCEPTORS, useClass: HttpXsrfInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
