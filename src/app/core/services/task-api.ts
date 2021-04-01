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

    createTask(previousId: string, description: string, stackId: string) {
        return this.http.post<ServerResponse<Task>>('/api/tasks', { previousId, description, stackId });
    }

    moveTask(oldPrevious: Task, newPrevious: Task, newNextId: string, movedTask: Task, newStackId?: string) {
        return this.http.put<ServerResponse<boolean>>('/api/tasks/move-task',
            { oldPrevious, newPrevious, newNextId, movedTask, newStackId }
        );
    }

}
