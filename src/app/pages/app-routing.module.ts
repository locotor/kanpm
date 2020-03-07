import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupModule } from './group/group.module';
import { AuthenticationModule } from './authentication/authentication.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'authentication',
    pathMatch: 'full'
  },
  { path: 'project/:id', loadChildren: () => import('./project/project.module').then(m => m.ProjectModule) }
  // Todo add login page
  // Todo add 404 page
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    GroupModule,
    AuthenticationModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
