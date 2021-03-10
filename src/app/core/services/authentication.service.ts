import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'core/types/user';
import { ServerResponse } from 'core/types/response';
import { SignUpRequest } from 'core/types/signUpRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  verifyUserNameOrEmail(userNameOrEmail: string) {
    return this.http.get<ServerResponse<boolean>>('/auth/verifyUserNameOrEmail', { params: { userNameOrEmail } });
  }

  verifyCaptcha(captcha: string) {
    return this.http.get<ServerResponse<boolean>>('/auth/verifyCaptcha', { params: { captcha } });
  }

  signIn(loginData: { username: string, password: string }) {
    return this.http.post<ServerResponse<User | null>>('/auth/sign-in', loginData);
  }

  register(registerData: SignUpRequest) {
    return this.http.post<ServerResponse<boolean>>('/auth/register', registerData);
  }

}
