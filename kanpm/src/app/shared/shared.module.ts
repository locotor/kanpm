import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ComponentsModule } from './components/components.modules';
import { MaterialModule } from './third-parties/material.module';
import { ZorroModule } from './third-parties/zorro.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        ZorroModule,
        ComponentsModule
    ],
    exports: [
        MaterialModule,
        ZorroModule,
        ComponentsModule,
        ReactiveFormsModule,
    ]
})
export class SharedModule { }
