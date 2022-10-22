import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {catchError, of} from 'rxjs';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  public registerForm = this.formBuilder.group({
    reindeer: ['', [Validators.required, Validators.minLength(3)]],
    username: ['', [Validators.required, Validators.minLength(3)]],
    name: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required]],
    password_confirmation: ['', [Validators.required]]
  });
  public submitted = false;
  private genericErrors = {
    required: 'Ce champ est requis',
    minlength: 'Ce champ doit contenir au moins 3 caractères'
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
    if (this.registerForm.valid) {
      this.authenticationService
        .register(this.registerForm.value)
        .pipe(
          catchError((error) => {
              this.backendErrors = error.error.errors;
              for (let backendErrorsKey in this.backendErrors) {
                const errors = Object.keys(this.backendErrors[backendErrorsKey]);

                this.registerForm.get(backendErrorsKey)?.setErrors(
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
