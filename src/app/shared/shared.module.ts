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
import { NavHeaderComponent } from './layout/nav-header/nav-header.component';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';
import { ProjectListItemComponent } from './project-list-item/project-list-item.component';

const MaterialModules = [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTabsModule,
    MatDividerModule,
    MatChipsModule
];
const Components = [NavHeaderComponent, ThemePickerComponent];

@NgModule({
    declarations: [
        ...Components,
        TaskListItemComponent,
        ProjectListItemComponent,
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
    ]
})
export class SharedModule { }
