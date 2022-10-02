import {Injectable} from '@angular/core';
import {ReplaySubject, tap} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

const RegisterEndpoint = 'register';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public isAuthenticated$ = new ReplaySubject<boolean>(1)

  constructor(private httpClient: HttpClient) {
    this.isAuthenticated$.next(false);
  }

  public register$(params: { pseudonyme: string; password: string; }) {
    return this.httpClient.post(environment.apiBaseUrl + RegisterEndpoint, params).pipe(
      tap((user) => {
        console.log('authentication.service::22::user', user);
      })
    )
  }
}
