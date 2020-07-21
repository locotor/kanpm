import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectComponent } from './project.component';
import { ProjectTasksComponent } from './project-tasks/project-tasks.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
    children: [
      { path: '', redirectTo: 'task/1', pathMatch: 'full' },
      { path: 'task/:taskId', component: ProjectTasksComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
