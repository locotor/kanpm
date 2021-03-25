import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  verifyUsername(username: string) {
    return this.http.get<ServerResponse<boolean>>('/auth/verify-username', { params: { username } });
  }

  verifyCaptcha(captcha: string) {
    return this.http.get<ServerResponse<boolean>>('/auth/verify-captcha', { params: { captcha } });
  }

  signIn(loginData: { username: string, password: string }) {
    return this.http.post<ServerResponse<User | null>>('/auth/sign-in', loginData);
  }

  logout() {
    return this.http.get<ServerResponse<any>>('/auth/logout',{});
  }

  register(registerData: SignUpRequest) {
    return this.http.post<ServerResponse<boolean>>('/auth/register', registerData);
  }

}
