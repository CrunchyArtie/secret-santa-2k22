import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {IsAuthenticatedGuard} from './guards/is-authenticated.guard';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {IsGuestGuard} from './guards/is-guest.guard';
import {GiftPageComponent} from './pages/gift-page/gift-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [IsGuestGuard]
  },
  {
    path: 'register',
    component: RegisterPageComponent,
    canActivate: [IsGuestGuard]
  },
  {
    path: 'landing',
    component: LandingPageComponent,
  },
  {
    path: 'gift',
    component: GiftPageComponent,
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: '**',
    redirectTo: 'landing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
