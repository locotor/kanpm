import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Task, TaskList } from 'core/types/task';

@Component({
  selector: 'kanpm-task-stack',
  templateUrl: './task-stack.component.html',
  styleUrls: ['./task-stack.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskStackComponent implements OnInit {

  @Input() list: TaskList;
  tasks: Task[] = [];
  isLoading = false;
  isShowCreatePane = false;

  constructor() { }

  ngOnInit(): void {
  }

  getStackStatus(): string {
    const completed = this.tasks.filter(task => task.isComplete);
    return `${completed.length}/${this.tasks.length}`;
  }

}
