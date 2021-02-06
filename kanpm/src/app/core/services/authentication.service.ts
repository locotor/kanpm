import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'core/types/user';
import { ServerResponse } from 'core/types/response';
import { SignUpRequest } from 'core/types/signUpRequest';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  verifyUserNameOrEmail(userNameOrEmail: string): Observable<ValidationErrors | null> {
    return this.http.get('auth/verifyUserNameOrEmail', { params: { userNameOrEmail } });
  }

  login(loginData: { username: string, password: string }): Observable<ServerResponse<User | null>> {
    return this.http.post<ServerResponse<User | null>>('auth/login', loginData, httpOptions);
  }

  register(registerData: SignUpRequest) {
    return this.http.post('auth/register', registerData);
  }

}
