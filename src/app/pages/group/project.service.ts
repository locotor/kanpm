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

  getProjects() {
    return this.http.get<Response<Project[]>>('api/projects');
  }

}
