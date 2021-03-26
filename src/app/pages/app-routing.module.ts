import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationModule } from './authentication/authentication.module';
import { TeamModule } from './team/team.module';
import { ProjectModule } from './project/project.module';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'authentication/sign-in',
    pathMatch: 'full'
  }
  // TODO add 404 page
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    TeamModule,
    ProjectModule,
    AuthenticationModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
