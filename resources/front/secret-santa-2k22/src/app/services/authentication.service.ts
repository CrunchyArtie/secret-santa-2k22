import {Injectable} from '@angular/core';
import {map, ReplaySubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

const REGISTER_ENDPOINT = 'register';
const LOGIN_ENDPOINT = 'login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public isAuthenticated$ = new ReplaySubject<boolean>(1);

  constructor(private httpClient: HttpClient) {
    this.isAuthenticated$.next(false);
  }

  public register(value: Partial<{ username: string | null, password: string | null, password_confirmation: string | null, reindeer: string | null }>) {
    return this.httpClient
      .post(environment.apiBaseUrl + REGISTER_ENDPOINT, value)
      .pipe(map((response: any) => {
        console.log('authentication.service::22::response', response);
        return response;
      }))
  }

  public login(value: Partial<{ username: string | null, password: string | null}>) {
    return this.httpClient
      .post(environment.apiBaseUrl + LOGIN_ENDPOINT, value)
      .pipe(map((response: any) => {
        console.log('authentication.service::22::response', response);
        return response;
      }))
  }
}
