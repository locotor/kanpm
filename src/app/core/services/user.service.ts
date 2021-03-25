import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerResponse } from 'core/types/response';
import { User } from 'core/types/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private http: HttpClient
    ) { }

    getCurrentUser() {
        return this.http.get<ServerResponse<User>>('/api/users/current-user');
    }

}
