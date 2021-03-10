import { Injectable } from '@angular/core';
import { User } from 'core/types/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  redirectUrl?: string;

  currentUser?: User;

  currentTeamId?: string;

  private storage: Storage = localStorage;

  constructor() { }

  isLoggedIn(): boolean {
    return this.currentUser ? true : false;
  }
}
