import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ProjectCreatorComponent } from 'shared/components/project-creator/project-creator.component';
import { ProjectService } from 'core/services/project.service';
import { Project } from 'core/types/project';
import { GlobalService } from 'core/services/global.service';

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
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let currentTeamId = this.globalService.currentTeamId;
    if (!currentTeamId) {
      currentTeamId = this.route.parent?.snapshot.paramMap.get('teamId') || '';
      this.globalService.currentTeamId = currentTeamId;
    }
    this.teamId = currentTeamId;
    this.getProjectListByTeamId();
  }

  openProjectCreatorDialog() {
    const dialogRef = this.dialog.open(ProjectCreatorComponent, {
      autoFocus: false,
      width: '40rem'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.isCreateProjectSuccess) {
        this.getProjectListByTeamId();
      }
    });
  }

  getProjectListByTeamId() {
    this.projectService.getProjectListByTeamId(this.teamId).subscribe(resp => {
      this.projectList = resp.data;
    });
  }

  routeToProjectDetail(e: Project) {
    this.router.navigate([`projects/${e.id}`]);
  }

}
