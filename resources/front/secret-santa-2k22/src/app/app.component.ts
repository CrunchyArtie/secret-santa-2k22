import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isAuthenticated$ = this.authenticationService.isAuthenticated$;

  constructor(private router: Router, private authenticationService: AuthenticationService) {
  }

  public reload() {
    this.router.navigate(['/']);
  }
}
