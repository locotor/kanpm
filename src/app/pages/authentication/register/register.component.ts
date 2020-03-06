import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormBase } from '../form-base';

@Component({
  selector: 'kanpm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent extends FormBase implements OnInit {

  isPasswordHide = true;
  registerForm = this.fb.group({
    userName: ['', [
      Validators.required,
      Validators.maxLength(64)
    ]],
    mobileNumber: ['', [
      this.valueFormatValidatorFactory(/^1(3|4|5|7|8)\d{9}$/)
    ]],
    password: ['', [
      Validators.required,
      Validators.maxLength(64)
    ]],
    passwordConfirm: ['', [
      Validators.required,
      Validators.maxLength(64)
    ]]
  }, {
    validators: this.passwordConfirmValidator,
    updateOn: 'blur'
  });
  get userName() { return this.registerForm.get('userName'); }
  get mobileNumber() { return this.registerForm.get('mobileNumber'); }
  get password() { return this.registerForm.get('password'); }
  get passwordConfirm() { return this.registerForm.get('passwordConfirm'); }

  constructor(
    private fb: FormBuilder
  ) {
    super();
  }

  ngOnInit(): void {
  }

}
