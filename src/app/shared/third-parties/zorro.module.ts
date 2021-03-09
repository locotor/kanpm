import { NgModule } from '@angular/core';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzCommentModule } from 'ng-zorro-antd/comment';

const ZorroModules = [
    NzAvatarModule,
    NzIconModule,
    NzDividerModule,
    NzTagModule,
    NzCommentModule
];

@NgModule({
  declarations: [],
  imports: [
    ...ZorroModules
  ],
  exports:[
    ...ZorroModules
  ]
})
export class ZorroModule { }
