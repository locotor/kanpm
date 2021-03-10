import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'core/services/authentication.service';
import { GlobalService } from 'core/services/global.service';

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnInit {

  isPasswordHide = true;
  signInForm = this.fb.group({
    userName: ['', [
      Validators.required,
      Validators.maxLength(64)
    ]],
    password: ['', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(64),
    ]]
  });
  get userName() { return this.signInForm.get('userName'); }
  get password() { return this.signInForm.get('password'); }

  constructor(
    private fb: FormBuilder,
    private authServer: AuthenticationService,
    private globalService: GlobalService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitLoginForm() {
    if (this.signInForm.invalid) { return; }
    this.authServer.signIn(this.signInForm.value).subscribe(
      (resp) => {
        if (!resp.data) { return; }
        this.globalService.currentUser = resp.data;
        if (this.globalService.redirectUrl) {
          this.router.navigate([this.globalService.redirectUrl]);
        } else {
          this.router.navigate(['teamSelect']);
        }
      });
  }
}
