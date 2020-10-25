import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private http: HttpClient
  ) { }

  getProject(id: string) {
    return this.http.get('api/project/getProjectById', { params: { id } });
  }

  verifyProjectName(projectName: string, teamId: string) {
    return this.http.get('api/project/verifyProjectName', { params: { projectName, teamId } });
  }

  getProjectListByTeamId(teamId: string) {
    return this.http.get('api/project/getProjectListByTeamId', { params: { teamId } });
  }

  addProject(addProjectParam) {
    return this.http.post('api/project/addProject', addProjectParam);
  }

  updateProject(updateProjectParam) {
    return this.http.put('api/project/updateProject', updateProjectParam);
  }

}
