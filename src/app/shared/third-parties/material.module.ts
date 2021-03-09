import { NgModule } from '@angular/core';

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
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
  MatDialogModule,
  MatListModule,
  MatPaginatorModule,
  MatSlideToggleModule,
  MatProgressSpinnerModule,
  MatSnackBarModule
];

@NgModule({
  declarations: [],
  imports: [
    ...MaterialModules
  ],
  exports: [
    ...MaterialModules
  ]
})
export class MaterialModule { }
