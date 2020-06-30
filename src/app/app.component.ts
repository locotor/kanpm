import { Component, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('tpl') tpl: TemplateRef<any>;
  title = 'kanpm';

  constructor(public dialog: MatDialog) { }

  test() {
    this.dialog.open(this.tpl, {
      data: { test: 'context transport' }
    });
  }

}
