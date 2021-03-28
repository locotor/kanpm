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
        return this.http.get<ServerResponse<TaskStack[]>>('/api/task-stacks', { params: { projectId } });
    }

    createTaskStack(previousId: string, projectId: string, stackName: string) {
        return this.http.post<ServerResponse<boolean>>('/api/task-stacks', { previousId, projectId, stackName });
    }

    moveTaskStack(oldPrevious: TaskStack, newPrevious: TaskStack, newNextId: string, movedStack: TaskStack) {
        return this.http.put<ServerResponse<boolean>>('/api/task-stacks/move-stack', { oldPrevious, newPrevious, newNextId, movedStack });
    }

}
