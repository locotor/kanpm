import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

import { TeamService } from 'shared/services/team.service';
import { map, finalize, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  templateUrl: './team-creator.component.html',
  styleUrls: ['./team-creator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamCreatorComponent implements OnInit {

  createTeamForm = this.fb.group({
    teamName: ['', [
      Validators.required,
      Validators.maxLength(64)
    ], [this.teamNameUniqueValidator.bind(this)]],
    description: ['', [
      Validators.maxLength(255),
    ]]
  }, { updateOn: 'blur' });
  get teamName() { return this.createTeamForm.get('teamName'); }
  get description() { return this.createTeamForm.get('description'); }

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<TeamCreatorComponent>,
    private CDRef: ChangeDetectorRef,
    private teamService: TeamService
  ) { }

  ngOnInit(): void {
  }

  private teamNameUniqueValidator(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.teamService.verifyTeamName(control.value).pipe(
      map(response => {
        return response ? null : { verifyTeamName: true };
      }),
      finalize(() => {
        this.CDRef.markForCheck();
      }),
      catchError(() => of(null))
    );
  }

  createTeam() {
    this.teamService.addTeam(this.createTeamForm.value).subscribe((resp: any) => {
      if (resp.success) {
        this.dialogRef.close({ isCreateTeamSuccess: true });
      }
    });
  }

}
