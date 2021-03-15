import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GlobalService } from 'core/services/global.service';
import { TeamService } from 'core/services/team.service';
import { Team } from 'core/types/team';
import { TeamCreatorComponent } from 'shared/components/team-creator/team-creator.component';

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
    const currentUserId = this.globalService.currentUser?.id;
    if (!currentUserId) { return; }
    this.teamService.getTeamListByMemberId(currentUserId).subscribe((resp: any) => {
      this.teams = resp.data;
    });
  }

  openTeamCreatorDialog() {
    const dialogRef = this.dialog.open(TeamCreatorComponent, {
      autoFocus: false,
      width: '40rem'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.isCreateTeamSuccess) {
        this.getTeamList();
      }
    });
  }

}
