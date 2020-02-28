import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { MatInputModule } from '@angular/material/input'

import { NavHeaderComponent } from './layout/nav-header/nav-header.component';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';
import { ProjectListItemComponent } from './project-list-item/project-list-item.component';
import { TaskCardComponent } from './task-card/task-card.component';

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
    MatInputModule
];
const Components = [NavHeaderComponent, ThemePickerComponent];

@NgModule({
    declarations: [
        ...Components,
        TaskListItemComponent,
        ProjectListItemComponent,
        TaskCardComponent,
    ],
    imports: [
        CommonModule,
        ...MaterialModules
    ],
    exports: [
        ...MaterialModules,
        ...Components,
        TaskListItemComponent,
        ProjectListItemComponent,
        TaskCardComponent,
    ]
})
export class SharedModule { }
