import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamHomeComponent } from './team-home/team-home.component';
import { TeamSelectComponent } from './team-select/team-select.component';
import { TeamProjectsComponent } from './team-projects/team-projects.component';
import { AuthGuard } from 'core/guards/auth.guard';
import { TeamRootComponent } from './team-root/team-root.component';


const routes: Routes = [
  {
    path: 'team/:teamId',
    component: TeamRootComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'projects',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: TeamHomeComponent
      },
      {
        path: 'projects',
        component: TeamProjectsComponent
      }
    ]
  },
  {
    path: 'teamSelect',
    component: TeamSelectComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
