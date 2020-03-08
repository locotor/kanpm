import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from 'types/project';
import { ServerResponse } from 'types/response';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private http: HttpClient
  ) { }

  getGroupProjects() {
    return this.http.get<ServerResponse<Project[]>>('api/group-projects');
  }

  getCollaborators() {
    return this.http.get<ServerResponse<any[]>>('api/group-collaborators');
  }

}
