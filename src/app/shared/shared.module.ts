import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelonMockModule } from '@delon/mock';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { ThemePickerComponent } from './components/theme-picker/theme-picker.component';
import { TaskListItemComponent } from './components/task-list-item/task-list-item.component';
import { ProjectListItemComponent } from './components/project-list-item/project-list-item.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { AvatarComponent } from './components/avatar/avatar.component';

// import { environment } from '@env/environment';
// const MOCKMODULE = !environment.production ? [DelonMockModule.forChild()] : [];

const MaterialModules = [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTabsModule,
    MatDividerModule,
    MatChipsModule,
    MatToolbarModule,
    MatCardModule,
    DragDropModule,
    MatInputModule,
    MatDialogModule
];

@NgModule({
    declarations: [
        ThemePickerComponent,
        TaskListItemComponent,
        ProjectListItemComponent,
        TaskCardComponent,
        TaskDetailComponent,
        AvatarComponent,
    ],
    imports: [
        CommonModule,
        ...MaterialModules,
    ],
    exports: [
        ...MaterialModules,
        ThemePickerComponent,
        TaskListItemComponent,
        ProjectListItemComponent,
        TaskCardComponent,
        TaskDetailComponent,
        AvatarComponent,
    ]
})
export class SharedModule { }
