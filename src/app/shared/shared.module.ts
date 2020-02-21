import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NavHeaderComponent } from './layout/nav-header/nav-header.component';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';

const MaterialModules = [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
];
const Components = [NavHeaderComponent, ThemePickerComponent];

@NgModule({
    declarations: [
        ...Components,
    ],
    imports: [
        CommonModule,
        ...MaterialModules
    ],
    exports: [
        ...MaterialModules,
        ...Components,
    ]
})
export class SharedModule { }
