import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Response } from 'types/response';

import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'kanpm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isPasswordHide = true;
  registerForm = this.fb.group({
    userName: ['', [
      Validators.required,
      Validators.maxLength(64)
    ], [this.userNameUniqueValidator.bind(this)]],
    password: ['', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(64),
      this.valueFormatValidatorFactory(/^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z]{6,64}$/)
    ]],
    passwordConfirm: ['', [
      Validators.required
    ]]
  }, {
    validators: this.passwordConfirmValidator,
    updateOn: 'blur'
  });
  get userName() { return this.registerForm.get('userName'); }
  get password() { return this.registerForm.get('password'); }
  get passwordConfirm() { return this.registerForm.get('passwordConfirm'); }

  constructor(
    private fb: FormBuilder,
    private authServer: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  private valueFormatValidatorFactory(re: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = re.test(control.value);
      return forbidden ? null : { valueFormat: { value: control.value } };
    };
  }

  private passwordConfirmValidator(group: FormGroup): ValidationErrors | null {
    const password = group.get('password');
    const passwordConfirm = group.get('passwordConfirm');
    const consistent = password && passwordConfirm && password.value === passwordConfirm.value;
    if (consistent) {
      return null;
    } else {
      passwordConfirm.setErrors({ passwordConfirm: true });
      return { passwordConfirm: true };
    }
  }

  private userNameUniqueValidator(control: AbstractControl): Observable<ValidationErrors | null> {

    return this.authServer.verifyUserNameUnique(control.value).pipe(
      map((response: Response<boolean>) => {
        return response.data ? { verifyUserName: true } : null;
      }),
      catchError(() => of(null))
    );

    // Todo change component ChangeDetectionStrategy to onpush
    // verifyResult.subscribe({
    //   complete: () => {
    //     this.CDRef.markForCheck();
    //   }
    // });
  }

}
