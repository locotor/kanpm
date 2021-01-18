import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Task, TaskList } from 'core/types/task';

@Component({
  selector: 'kanpm-task-stack',
  templateUrl: './task-stack.component.html',
  styleUrls: ['./task-stack.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskStackComponent implements OnInit {

  list: TaskList;
  tasks: Task[];
  isShowCreatePane = false;

  constructor() { }

  ngOnInit(): void {
  }

}
