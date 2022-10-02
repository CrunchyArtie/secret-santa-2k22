import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<{ pseudonyme: string, password: string }>()

  public registerForm = this.formBuilder.group({
    pseudonyme: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]
  });

  public submitted = false;

  constructor(private formBuilder: FormBuilder) {
  }

  public submit() {
    this.submitted = true;

    if (this.registerForm.valid) {
      this.onSubmit.emit({
        pseudonyme: this.registerForm.value.pseudonyme!,
        password: this.registerForm.value.password!
      });
    }
  }

  public ngOnInit() {
  }
}
