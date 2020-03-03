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

  collaborators = [
    { name: '张三' },
    { name: '李四' },
    { name: '王麻子' },
  ];

  ngOnInit(): void {
    this._projectService.getProjects().subscribe(
      (response) => {
        console.log('test:', response);
        this.projects = response.data;
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }

}
