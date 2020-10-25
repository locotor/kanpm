import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProjectCreatorComponent } from 'shared/components/project-creator/project-creator.component';
import { GlobalService } from 'core/services/global.service';
import { ProjectService } from 'core/services/project.service';
import { Project } from 'core/types/project';

@Component({
  templateUrl: './team-projects.component.html',
  styleUrls: ['./team-projects.component.scss']
})
export class TeamProjectsComponent implements OnInit {

  projectList: Project[] = [];

  private teamId = '';

  constructor(
    private dialog: MatDialog,
    private projectService: ProjectService,
    private globalService: GlobalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.teamId = this.globalService.currentTeamId;
    this.getProjectListByTeamId(this.teamId);
  }

  openProjectCreatorDialog() {
    const dialogRef = this.dialog.open(ProjectCreatorComponent, {
      autoFocus: false,
      width: '650px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.isCreateProjectSuccess) {
        this.getProjectListByTeamId(this.teamId);
      }
    });
  }

  getProjectListByTeamId(teamId: string) {
    this.projectService.getProjectListByTeamId(teamId).subscribe(
      (response: any) => {
        this.projectList = response.data;
      });
  }

  routeToProjectDetail(e: Project) {
    this.router.navigate([`project/${e.id}`]);
  }

}
