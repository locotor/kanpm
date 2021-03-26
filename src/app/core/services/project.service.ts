import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerResponse } from 'core/types/response';
import { Project } from 'core/types/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private http: HttpClient
  ) { }

  getProject(id: string) {
    return this.http.get<ServerResponse<Project>>('/api/project/get', { params: { id } });
  }

  verifyProjectName(projectName: string, teamId: string) {
    return this.http.get<ServerResponse<boolean>>('/api/project/verifyProjectName', { params: { projectName, teamId } });
  }

  getProjectListByTeamId(teamId: string) {
    return this.http.get<ServerResponse<Project[]>>('/api/project/list-by-team-id', { params: { teamId } });
  }

  addProject(addProjectParam: any) {
    return this.http.post<ServerResponse<boolean>>('/api/project/addProject', addProjectParam);
  }

  updateProject(updateProjectParam: any) {
    return this.http.put<ServerResponse<boolean>>('/api/project/updateProject', updateProjectParam);
  }

}
