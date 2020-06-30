import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TeamCreatorComponent } from 'shared/components/team-creator/team-creator.component';

@Component({
  selector: 'kanpm-group-selector',
  templateUrl: './group-selector.component.html',
  styleUrls: ['./group-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupSelectorComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openTeamCreatorDialog() {
    this.dialog.open(TeamCreatorComponent);
  }


}
