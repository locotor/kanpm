import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { TeamService } from "shared/services/team.service";

@Component({
  templateUrl: './team-creator.component.html',
  styleUrls: ['./team-creator.component.scss']
})
export class TeamCreatorComponent implements OnInit {

  createTeamForm = this.fb.group({
    teamName: ['', [
      Validators.required,
      Validators.maxLength(64)
    ]],
    description: ['', [
      Validators.maxLength(255),
    ]]
  }, {
    updateOn: 'blur'
  });
  get teamName() { return this.createTeamForm.get('teamName'); }
  get description() { return this.createTeamForm.get('description'); }

  constructor(
    private fb: FormBuilder,
    private teamService: TeamService
  ) { }

  ngOnInit(): void {
  }

  createTeam() {
    this.teamService.addTeam(this.createTeamForm.value).subscribe(resp => {
      console.log(resp);
    });
  }

}
