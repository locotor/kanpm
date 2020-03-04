import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Project } from 'types/project';
import { ProjectService } from './project.service';

@Component({
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  constructor(
    private _projectService: ProjectService
  ) { }

  relevantNavs = [
    { name: '首页', icon: 'home' },
    { name: '我执行的', icon: 'how_to_reg' },
    { name: '我参与的', icon: 'person_add' },
    { name: '我创建的', icon: 'post_add' },
  ];

  projects: Project[];

  collaborators = [];

  ngOnInit(): void {
    this.getGroupProjects();
    this.getCollaborators();
  }

  getGroupProjects() {
    this._projectService.getGroupProjects().subscribe(
      (response) => {
        console.log('test:', response);
        this.projects = response.data;
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }

  getCollaborators() {
    this._projectService.getCollaborators().subscribe(
      (response) => {
        console.log('test:', response);
        this.collaborators = response.data;
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }

}
