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

  verifyUserNameOrEmail(userNameOrEmail: string): Observable<ValidationErrors | null> {
    return this.http.get('/auth/verifyUserNameOrEmail', { params: { userNameOrEmail } });
  }

  login(loginData: { username: string, password: string }): Observable<ServerResponse<User | null>> {
    return this.http.post<ServerResponse<User | null>>('/auth/sign-in', loginData);
  }

  register(registerData: SignUpRequest) {
    return this.http.post('/auth/register', registerData);
  }

}
