import { NgModule } from '@angular/core';

import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';
import { ProjectListItemComponent } from './project-list-item/project-list-item.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { AvatarComponent } from './avatar/avatar.component';
import { TeamCreatorComponent } from './team-creator/team-creator.component';
import { ProjectCreatorComponent } from './project-creator/project-creator.component';
import { ZorroModule } from 'shared/third-parties/zorro.module';
import { MaterialModule } from 'shared/third-parties/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const SharedComponents = [
    ThemePickerComponent,
    TaskListItemComponent,
    ProjectListItemComponent,
    TaskCardComponent,
    TaskDetailComponent,
    AvatarComponent,
    TeamCreatorComponent,
    ProjectCreatorComponent
]

@NgModule({
    declarations: [
        ...SharedComponents
    ],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        ZorroModule
    ],
    exports: [
        ...SharedComponents
    ]
})
export class ComponentsModule { }
