import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TeamCreatorComponent } from 'shared/components/team-creator/team-creator.component';

import { Team } from 'types/team';
import { GlobalService } from 'shared/services/global.service';
import { TeamService } from 'shared/services/team.service';

@Component({
  templateUrl: './team-select.component.html',
  styleUrls: ['./team-select.component.scss']
})
export class TeamSelectComponent implements OnInit {

  teams: Team[] = [];

  constructor(
    private dialog: MatDialog,
    private globalService: GlobalService,
    private teamService: TeamService
  ) { }

  ngOnInit(): void {
    this.getTeamList();
  }

  getTeamList() {
    const currentUserId = this.globalService.currentUser.id;
    this.teamService.getTeamListByMemberId(currentUserId).subscribe((resp: any) => {
      this.teams = resp.data;
    });
  }

  openTeamCreatorDialog() {
    const dialogRef = this.dialog.open(TeamCreatorComponent, {
      autoFocus: false,
      width: '650px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.isCreateTeamSuccess) {
        this.getTeamList();
      }
    });
  }


}
