import { Injectable } from '@angular/core';
import { UserInStorage } from 'types/user';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  redirectUrl: string;

  jwt: string;

  private storage: Storage = localStorage;

  constructor() { }

  // Store userinfo from local storage
  storeUserInfo(userInfoString: string) {
    this.storage.setItem('currentUser', userInfoString);
  }

  // Store json web token from local storage
  storeJWT(jwt: string) {
    this.storage.setItem('jwt', jwt);
    this.jwt = jwt;
  }

  // Remove userinfo from local storage
  removeUserInfo() {
    this.storage.removeItem('currentUser');
  }

  // Remove userinfo from local storage
  removeJWT() {
    this.storage.removeItem(this.jwt);
    this.jwt = undefined;
  }

  // Get userinfo from session storage
  getUserInfo(): UserInStorage | null {
    try {
      const userInfoString = this.storage.getItem('currentUser');
      if (userInfoString) {
        const userObj: UserInStorage = JSON.parse(userInfoString);
        return userObj;
      } else {
        return null;
      }
    } catch (e) {
      return null;
    }
  }

  isLoggedIn(): boolean {
    return this.storage.getItem('currentUser') ? true : false;
  }
}
