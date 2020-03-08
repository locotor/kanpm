import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'shared/services/authentication/authentication.service';
import { User } from 'types/user';
import { ServerResponse } from 'types/response';
import { Router } from '@angular/router';

@Component({
  selector: 'kanpm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  isPasswordHide = true;
  loginForm = this.fb.group({
    userName: ['', [
      Validators.required,
      Validators.maxLength(64)
    ]],
    password: ['', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(64),
    ]]
  }, {
    updateOn: 'blur'
  });
  get userName() { return this.loginForm.get('userName'); }
  get password() { return this.loginForm.get('password'); }

  constructor(
    private fb: FormBuilder,
    private authServer: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitLoginForm() {
    this.authServer.login(this.loginForm.value).subscribe(
      (response: ServerResponse<User>) => {
        this.authServer.isLoggedIn = !!response.data;
        if (this.authServer.redirectUrl) {
          this.router.navigate([this.authServer.redirectUrl]);
        } else {
          this.router.navigate([`/group/${response.data.id}`]);
        }
      });
  }


}
