import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GlobalService } from 'core/services/global.service';
import { ProjectService } from 'core/services/project.service';

@Component({
  templateUrl: './project-creator.component.html',
  styleUrls: ['./project-creator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCreatorComponent {

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
    private globalService: GlobalService,
    private projectService: ProjectService
  ) { }

  createProject() {
    const projectParam = Object.assign(this.createProjectForm.value, {});
    projectParam.teamId = this.globalService.currentTeamId;
    this.projectService.addProject(projectParam).subscribe((resp: any) => {
      if (resp.success) {
        this.dialogRef.close({ isCreateProjectSuccess: true });
      }
    });
  }

}
