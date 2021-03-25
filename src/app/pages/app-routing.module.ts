import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamModule } from './team/team.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthGuardService } from 'core/guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'authentication/sign-in',
    pathMatch: 'full'
  },
  {
    path: 'project/:id',
    loadChildren: () => import('./project/project.module').then(m => m.ProjectModule),
    canLoad: [AuthGuardService],
  }
  // Todo add 404 page
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    TeamModule,
    AuthenticationModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
