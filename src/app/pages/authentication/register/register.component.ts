import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors, FormGroup, AsyncValidatorFn, AbstractControlOptions } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'core/services/authentication.service';
import { MessageService } from 'core/services/message.service';
import { Observable, of } from 'rxjs';
import { map, catchError, finalize } from 'rxjs/operators';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isPasswordHide = true;
  registerForm = this.fb.group({
    userName: ['', {
      validators: [
        Validators.required,
        Validators.maxLength(128),
      ],
      asyncValidators: [this.userNameUniqueValidator.bind(this)],
      updateOn: 'blur'
    }],
    password: ['', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(64),
      this.valueFormatValidatorFactory(/^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z]{6,64}$/)
    ]],
    passwordConfirm: ['', {
      validators: [
        Validators.required,
        this.passwordConfirmValidator
      ],
      updateOn: 'blur'
    }],
    captcha: ['', {
      validators: [
        Validators.required
      ],
      asyncValidators: [this.captchaValidator.bind(this)],
      updateOn: 'blur'
    }]
  }, { updateOn: 'submit' });
  captchaSrc = '/auth/captcha';

  get userName() { return this.registerForm.get('userName'); }
  get password() { return this.registerForm.get('password'); }
  get passwordConfirm() { return this.registerForm.get('passwordConfirm'); }
  get captcha() { return this.registerForm.get('captcha'); }

  constructor(
    private fb: FormBuilder,
    private authServer: AuthenticationService,
    private router: Router,
    private message: MessageService
  ) { }

  ngOnInit(): void {
  }

  private valueFormatValidatorFactory(re: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = re.test(control.value);
      return forbidden ? null : { valueFormat: { value: control.value } };
    };
  }

  private passwordConfirmValidator(control: AbstractControl) {
    const password = control.parent?.get('password')?.value;
    const passwordConfirm = control.value;
    if (password && passwordConfirm && passwordConfirm === password) {
      return null;
    } else {
      control.setErrors({ passwordConfirm: true });
      return { passwordConfirm: true };
    }
  }

  private userNameUniqueValidator(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.authServer.verifyUserNameOrEmail(control.value).pipe(
      map(resp => {
        return resp.data ? null : { verify: true };
      })
    );
  }

  private captchaValidator(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.authServer.verifyCaptcha(control.value).pipe(
      map(resp => {
        return resp.data ? null : { verify: true };
      })
    );
  }

  refreshCaptcha() {
    const timeStamp = new Date().getTime();
    this.captchaSrc = `/auth/captcha?stamp=${timeStamp}`;
  }

  submitRegisterForm(): void {
    if (this.registerForm.invalid) {
      return;
    }
    this.authServer.register(this.registerForm.value).subscribe({
      next: (resp) => {
        if (resp.data) {
          this.router.navigateByUrl('../sign-in');
          this.message.openMessage('注册成功，跳转登录');
        }
      }
    });
  }

}
