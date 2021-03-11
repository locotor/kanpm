import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Task, TaskStack } from 'core/types/task';

@Component({
  selector: 'kanpm-task-stack',
  templateUrl: './task-stack.component.html',
  styleUrls: ['./task-stack.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskStackComponent implements OnInit {

  @Input() stack?: TaskStack;
  tasks: Task[] = [];
  isLoading = false;
  isShowCreatePane = false;

  constructor() { }

  ngOnInit(): void {
    this.tasks = this.getStackTasks('for-test-string');
  }

  getStackStatus(): string {
    const completed = this.tasks.filter(task => task.isComplete);
    return `${completed.length}/${this.tasks.length}`;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  getStackTasks(stackId: string): Task[] {
    const tasks: Task[] = [];
    const random = Math.floor(Math.random() * 12 + 1);
    for (let index = 0; index < random; index++) {
      const task = {
        id: `${index}`,
        isComplete: index % 2 == 1,
        description: '测试任务0' + index,
        index,
        createdTime: new Date().getTime()
      };
      tasks.push(task);
    }
    return tasks;
  }

}
