import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'group/1',
    pathMatch: 'full'
  },
  { path: 'project/:id', loadChildren: () => import('./pages/project/project.module').then(m => m.ProjectModule) }
  // Todo add login page
  // Todo add 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
