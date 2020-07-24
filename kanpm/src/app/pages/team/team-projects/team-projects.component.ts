import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GlobalService } from 'shared/services/global.service';
import { ProjectCreatorComponent } from 'shared/components/project-creator/project-creator.component';

@Component({
  templateUrl: './team-projects.component.html',
  styleUrls: ['./team-projects.component.scss']
})
export class TeamProjectsComponent implements OnInit {

  starredProjects = new Array(8);

  constructor(
    private dialog: MatDialog,
    private globalService: GlobalService,
  ) { }

  ngOnInit(): void {
  }

  openProjectCreatorDialog() {
    const dialogRef = this.dialog.open(ProjectCreatorComponent, {
      autoFocus: false,
      width: '650px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.isCreateTeamSuccess) {
        //  ToDo
      }
    });
  }

}
