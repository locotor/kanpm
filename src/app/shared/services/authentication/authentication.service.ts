import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ValidationErrors } from '@angular/forms';
import { User } from 'types/user';
import { ServerResponse } from 'types/response';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isLoggedIn = false;

  redirectUrl: string;

  constructor(
    private http: HttpClient
  ) { }

  verifyUserNameUnique(userName: string): Observable<ValidationErrors | null> {
    return this.http.post('api/verify-username', { userName });
  }

  login(loginData: { userName: string, password: string }): Observable<ServerResponse<User | null>> {
    return this.http.post<ServerResponse<User|null>>('api/login', loginData);
  }

}
