import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Task } from 'core/types/task';

@Component({
  selector: 'kanpm-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskCardComponent implements OnInit {

  @Input() task!: Task;

  constructor() { }

  ngOnInit(): void {
  }

  completedSubTask(): number {
    if (!this.task || !this.task.subTasks || this.task.subTasks.length === 0) { return 0; }
    return this.task.subTasks.filter(task => task.isComplete).length;
  }

}
