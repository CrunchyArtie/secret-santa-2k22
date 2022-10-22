import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {catchError, of} from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public loginForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  private genericErrors = {
    required: 'Ce champ est requis',
  };
  private backendErrors: { [control: string]: { [error: string]: string } } = {};

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
  }

  public onSubmit() {
    if (this.loginForm.valid) {
      this.authenticationService
        .login(this.loginForm.value)
        .pipe(
          catchError((error) => {
              this.backendErrors = error.error.errors;
              for (let backendErrorsKey in this.backendErrors) {
                const errors = Object.keys(this.backendErrors[backendErrorsKey]);

                this.loginForm.get(backendErrorsKey)?.setErrors(
                  errors.reduce((acc, error) => ({...acc, [error]: true}), {})
                );
              }
              return of(error);
            }
          ))
        .subscribe((response) => {
          console.log('register-page.component::34::onSubmit', response);
          if (response.status !== 201) {
          }
        });
    }
  }

  public getErrors(control: string) {
    return {
      ...this.genericErrors,
      ...(this.backendErrors[control] ?? {})
    };
  }
}
