import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../modules/authentication/authentication.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  public registerFormSubmit(formValues: { pseudonyme: string; password: string }) {
    this.authenticationService
      .register$({
        ...formValues
      })
      .subscribe((user) => {
        if (user) {
          console.log('register-page.component::27::user', user);
        }
      });
  }
}
