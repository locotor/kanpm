import { Injectable } from '@angular/core';
import { User } from 'core/types/user';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  redirectUrl?: string;

  currentTeamId?: string;

  private storage: Storage = localStorage;

  set currentUser(user: User | null) {
    this.storage.setItem('currentUser', JSON.stringify(user));
  }

  get currentUser() {
    const storageValue = this.storage.getItem('currentUser');
    if (!storageValue) { return null; }
    return JSON.parse(storageValue);
  }

  constructor(private userService: UserService) { }

  isUserSignIn(): Observable<boolean> {
    if (this.currentUser) {
      return of(true);
    } else {
      return this.userService.getCurrentUser().pipe(
        tap(resp => {
          if (resp.code === '20000') {
            this.currentUser = resp.data;
          }
        }),
        map(resp => {
          return resp.code === '20000' ? true : false;
        })
      );
    }
  }

}
