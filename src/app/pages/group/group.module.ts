import { NgModule } from '@angular/core';

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
    SharedModule
  ]
})
export class GroupModule { }
