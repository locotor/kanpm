import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team.component';
import { TeamHomeComponent } from './team-home/team-home.component';
import { AuthGuardService } from 'shared/guards/auth-guard.service';
import { TeamSelectComponent } from './team-select/team-select.component';


const routes: Routes = [
  {
    path: 'team/:teamId',
    component: TeamComponent,
    // canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: TeamHomeComponent
      },
      // {
      //   path: 'as-performer'
      // },
      // {
      //   path: 'as-participant'
      // },
      // {
      //   path: 'as-creator'
      // }
      // {
      //   path: 'user/:userId'
      // }
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
