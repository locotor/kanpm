import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './team-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TeamHomeComponent } from './team-home/team-home.component';
import { TeamSelectComponent } from './team-select/team-select.component';
import { TeamProjectsComponent } from './team-projects/team-projects.component';
import { TeamRootComponent } from './team-root/team-root.component';

@NgModule({
  declarations: [
    TeamRootComponent,
    TeamHomeComponent,
    TeamSelectComponent,
    TeamProjectsComponent
  ],
  imports: [
    GroupRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class TeamModule { }
