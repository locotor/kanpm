import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'shared/services/authentication.service';
import { User } from 'types/user';
import { ServerResponse } from 'types/response';
import { Router } from '@angular/router';
import { GlobalService } from 'shared/services/global.service';

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
    private globalService: GlobalService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitLoginForm() {
    this.authServer.login(this.loginForm.value).subscribe(
      (response: ServerResponse<any>) => {
        this.globalService.storeJWT(response.data.jwt);
        this.globalService.storeUserInfo(JSON.stringify(response.data.user));
        if (this.globalService.redirectUrl) {
          this.router.navigate([this.globalService.redirectUrl]);
        } else {
          this.router.navigate([`/group/${response.data.id}`]);
        }
      });
  }
}
