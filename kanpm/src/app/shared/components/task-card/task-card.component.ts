import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Task } from 'core/types/task';

@Component({
  selector: 'kanpm-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskCardComponent implements OnInit {

  @Input() task: Task;

  constructor() { }

  ngOnInit(): void {
  }

  completedSubTask() {
    return this.task.subTasks.filter(task => task.isComplete).length;
  }

}
