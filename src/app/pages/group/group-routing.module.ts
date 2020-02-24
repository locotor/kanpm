import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupComponent } from './group.component';
import { GroupHomeComponent } from './group-home/group-home.component';


const routes: Routes = [
  {
    path: 'group/:groupId',
    component: GroupComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: GroupHomeComponent
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
