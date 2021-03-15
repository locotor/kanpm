import { Injectable } from '@angular/core';
import { User } from 'core/types/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  redirectUrl?: string;

  currentTeamId?: string;

  private storage: Storage = localStorage;

  set currentUser(user: User) {
    this.storage.setItem('currentUser', JSON.stringify(user));
  }

  get currentUser() {
    const storageValue = this.storage.getItem('currentUser')
    if (!storageValue) { throw { msg:'user cache on found'} }
    return JSON.parse(storageValue);
  }

  constructor() { }

  isLoggedIn(): boolean {
    return this.currentUser ? true : false;
  }
}
