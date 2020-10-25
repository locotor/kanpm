import { Injectable } from '@angular/core';
import { User } from 'core/types/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  redirectUrl: string;

  currentUser: User;

  currentTeamId = '';

  currentTeam$: Observable<object>;

  private storage: Storage = localStorage;

  private jwt = '';

  constructor() { }

  // Store json web token from local storage
  storeJWT(jwt: string) {
    this.storage.setItem('jwt', jwt);
    this.jwt = jwt;
  }

  getJWT() {
    return this.jwt || this.storage.getItem('jwt');
  }

  // Remove userinfo from local storage
  removeJWT() {
    this.storage.removeItem(this.jwt);
    this.jwt = undefined;
  }

  isLoggedIn(): boolean {
    return this.currentUser ? true : false;
  }
}
