import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

import { ServerResponse } from 'types/response';
import { User } from 'types/user';
import { SignUpRequest } from 'types/signUpRequest';

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
    return this.http.get('api/auth/verifyUserNameOrEmail', { params: { userNameOrEmail } });
  }

  login(loginData: { userNameOrEmail: string, password: string }): Observable<ServerResponse<User | null>> {
    return this.http.post<ServerResponse<User | null>>('api/auth/signin', loginData, httpOptions);
  }

  signup(signupData: SignUpRequest) {
    return this.http.post('api/auth/signup', signupData);
  }

}
