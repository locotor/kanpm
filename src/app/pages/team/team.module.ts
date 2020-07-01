import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TeamHomeComponent } from './team-home/team-home.component';

@NgModule({
  declarations: [
    TeamComponent,
    TeamHomeComponent
  ],
  imports: [
    GroupRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class TeamModule { }
