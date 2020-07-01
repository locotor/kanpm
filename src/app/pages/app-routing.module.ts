import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamModule } from './team/team.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthGuardService } from 'shared/guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'authentication',
    pathMatch: 'full'
  },
  {
    path: 'project/:id',
    loadChildren: () => import('./project/project.module').then(m => m.ProjectModule),
    // canLoad: [AuthGuardService],
  }
  // Todo add 404 page
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TeamModule,
    AuthenticationModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
