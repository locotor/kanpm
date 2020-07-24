import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  templateUrl: './project-creator.component.html',
  styleUrls: ['./project-creator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCreatorComponent implements OnInit {

  createProjectForm = this.fb.group({
    projectName: ['', [
      Validators.required,
      Validators.maxLength(64)
    ]],
    description: ['', [
      Validators.maxLength(255),
    ]]
  }, { updateOn: 'blur' });
  get projectName() { return this.createProjectForm.get('projectName'); }
  get description() { return this.createProjectForm.get('description'); }

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProjectCreatorComponent>,
    private CDRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
  }

}
