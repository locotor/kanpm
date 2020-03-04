import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from 'types/project';
import { Response } from 'types/response';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private http: HttpClient
  ) { }

  getGroupProjects() {
    return this.http.get<Response<Project[]>>('api/group-projects');
  }

  getCollaborators() {
    return this.http.get<Response<any[]>>('api/group-collaborators');
  }

}
