import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ComponentsModule } from './components/components.modules';
import { MaterialModule } from './third-parties/material.module';
import { ZorroModule } from './third-parties/zorro.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        ZorroModule,
        ComponentsModule
    ],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        MaterialModule,
        ZorroModule,
        ComponentsModule,
    ]
})
export class SharedModule { }
