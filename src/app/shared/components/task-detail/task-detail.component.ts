import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'kanpm-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
