import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerResponse } from 'core/types/response';
import { Task } from 'core/types/task';

@Injectable({
    providedIn: 'root'
})
export class TaskApi {

    constructor(private http: HttpClient) { }

    getTasks(stackId: string) {
        return this.http.get<ServerResponse<Task[]>>('/api/tasks', { params: { stackId } });
    }

    createTask(description: string, stackId: string) {
        return this.http.post<ServerResponse<Task>>('/api/tasks', { description, stackId });
    }

}
