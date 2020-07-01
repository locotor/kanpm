import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TeamCreatorComponent } from 'shared/components/team-creator/team-creator.component';

@Component({
  selector: 'kanpm-team-selector',
  templateUrl: './team-selector.component.html',
  styleUrls: ['./team-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamSelectorComponent implements OnInit {

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
