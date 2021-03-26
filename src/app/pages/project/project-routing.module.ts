import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'core/guards/auth.guard';
import { ProjectIdGuard } from 'core/guards/project-id.guard';

import { ProjectRootComponent } from './project-root/project-root.component';
import { ProjectTasksComponent } from './project-tasks/project-tasks.component';

const routes: Routes = [
  {
    path: 'projects/:id',
    component: ProjectRootComponent,
    canLoad: [AuthGuard, ProjectIdGuard],
    children: [
      { path: '', redirectTo: 'tasks', pathMatch: 'full' },
      { path: 'tasks', component: ProjectTasksComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
