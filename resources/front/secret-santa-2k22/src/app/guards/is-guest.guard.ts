import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable, take, tap} from 'rxjs';
import {AuthenticationService} from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class IsGuestGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authenticationService.isAuthenticated$.pipe(
      take(1),
      map(isAuthenticated => !isAuthenticated),
      tap(isGuest => {
        if (isGuest === false) {
          console.log('is-guest.guard::22::no no no');
          this.router.navigate(['/']);
        }
      })
    );
  }

}
