import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public loginForm = this.formBuilder.group({
    pseudonyme: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required]],
    rememberMe: [false]
  });

  public submitted = false;

  constructor(private formBuilder: FormBuilder) {
  }

  public onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    if (this.submitted) {
    }
  }

  public ngOnInit() {
  }
}
