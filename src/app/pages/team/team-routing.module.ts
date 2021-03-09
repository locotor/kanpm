import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team.component';
import { TeamHomeComponent } from './team-home/team-home.component';
import { TeamSelectComponent } from './team-select/team-select.component';
import { TeamProjectsComponent } from './team-projects/team-projects.component';


const routes: Routes = [
  {
    path: 'team/:teamId',
    component: TeamComponent,
    // canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        redirectTo: 'project',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: TeamHomeComponent
      },
      {
        path: 'project',
        component: TeamProjectsComponent
      }
    ]
  },
  {
    path: 'teamSelect',
    component: TeamSelectComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
