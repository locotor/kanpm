import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
        ReactiveFormsModule,
        HttpClientModule,
        MaterialModule,
        ZorroModule,
        ComponentsModule
    ]
})
export class SharedModule { }
