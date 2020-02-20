import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { NavHeaderComponent } from './layout/nav-header/nav-header.component';

const MaterialModules = [MatSidenavModule, MatSidenavModule];
const Components = [NavHeaderComponent];

@NgModule({
    declarations: [
        ...Components
    ],
    imports: [
        CommonModule,
        ...MaterialModules
    ],
    exports: [
        ...MaterialModules,
        ...Components
    ]
})
export class SharedModule { }
