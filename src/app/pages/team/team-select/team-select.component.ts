import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TeamCreatorComponent } from 'shared/components/team-creator/team-creator.component';

@Component({
  templateUrl: './team-select.component.html',
  styleUrls: ['./team-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamSelectComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openTeamCreatorDialog() {
    this.dialog.open(TeamCreatorComponent, {
      autoFocus: false,
      width: '650px'
    });
  }


}
