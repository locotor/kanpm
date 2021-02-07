import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'core/services/authentication.service';
import { GlobalService } from 'core/services/global.service';

@Component({
  selector: 'kanpm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  isPasswordHide = true;
  loginForm = this.fb.group({
    username: ['', [
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
  get username() { return this.loginForm.get('username'); }
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
      (response: any) => {
        if (response === null) { return; }
        this.globalService.storeJWT(response.accessToken);
        this.globalService.currentUser = response.user;
        if (this.globalService.redirectUrl) {
          this.router.navigate([this.globalService.redirectUrl]);
        } else {
          // ToDo add recentTeamId, if null, then go to the team select page
          if (response.user.recentGroupId) {
            this.router.navigate([`/team/${response.recentGroupId}`]);
          } else {
            this.router.navigate(['teamSelect']);
          }
        }
      });
  }
}
