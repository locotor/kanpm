import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerResponse } from 'core/types/response';
import { TaskStack } from 'core/types/task';

@Injectable({
    providedIn: 'root'
})
export class TaskStackService {

    constructor(
        private http: HttpClient
    ) { }

    getStackListByProjectId(projectId: string) {
        return this.http.get<ServerResponse<TaskStack[]>>('/api/task-stack/list-by-project-id', { params: { projectId } });
    }

}