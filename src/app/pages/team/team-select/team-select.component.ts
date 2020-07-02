import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TeamCreatorComponent } from 'shared/components/team-creator/team-creator.component';

import { Team } from "types/team";

@Component({
  templateUrl: './team-select.component.html',
  styleUrls: ['./team-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamSelectComponent implements OnInit {

  teams: Team[] = [{
    id: '1',
    teamName: 'test1'
  }, {
    id: '2',
    teamName: 'teat2'
  }];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getTeamList() {

  }

  openTeamCreatorDialog() {
    this.dialog.open(TeamCreatorComponent, {
      autoFocus: false,
      width: '650px'
    });
  }


}
