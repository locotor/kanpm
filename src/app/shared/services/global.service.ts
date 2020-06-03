import { Injectable } from '@angular/core';
import { User } from 'types/user';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  redirectUrl: string;

  jwt: string = '';

  currentUser: User;

  private storage: Storage = localStorage;

  constructor() { }

  // Store json web token from local storage
  storeJWT(jwt: string) {
    this.storage.setItem('jwt', jwt);
    this.jwt = jwt;
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
