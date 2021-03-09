import { Component, OnInit, ViewChild } from '@angular/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TaskList } from 'core/types/task';

@Component({
  templateUrl: './project-tasks.component.html',
  styleUrls: ['./project-tasks.component.scss']
})
export class ProjectTasksComponent implements OnInit {

  @ViewChild('taskDetailDrawer') taskDetailDrawer;
  taskStacks:TaskList[] = [];
  isShowCreatePane = false;

  ngOnInit(): void {
    this.taskStacks = this.getProjectTaskStacks();
  }

  dropTaskList(event) {
    moveItemInArray(this.taskStacks, event.previousIndex, event.currentIndex);
  }

  dropTaskCard(event) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data.tasks, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data.tasks,
        event.container.data.tasks,
        event.previousIndex,
        event.currentIndex);
    }
  }

  test() {
    this.taskDetailDrawer.open();
  }

  private getProjectTaskStacks(): TaskList[] {
    const stacks: TaskList[] = [];
    const random = Math.floor(Math.random() * 5 + 1);
    for (let index = 0; index <= 7; index++) {
      const stack = {
        id: `${index}`,
        name: '测试任务列表0' + index,
        index
      };
      stacks.push(stack);
    }
    return stacks;
  }

}
