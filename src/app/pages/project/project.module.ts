import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectTasksComponent } from './project-tasks/project-tasks.component';
import { ProjectRootComponent } from './project-root/project-root.component';
import { ProjectRoutingModule } from './project-routing.module';


@NgModule({
  declarations: [ProjectRootComponent, ProjectTasksComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
