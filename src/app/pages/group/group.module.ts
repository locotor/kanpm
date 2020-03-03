import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GroupRoutingModule } from './group-routing.module';
import { GroupComponent } from './group.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GroupHomeComponent } from './group-home/group-home.component';

@NgModule({
  declarations: [
    GroupComponent,
    GroupHomeComponent
  ],
  imports: [
    GroupRoutingModule,
    CommonModule,
    HttpClientModule,
    SharedModule
  ]
})
export class GroupModule { }
