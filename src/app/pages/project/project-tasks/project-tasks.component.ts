import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TaskStack } from 'core/types/task';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  templateUrl: './project-tasks.component.html',
  styleUrls: ['./project-tasks.component.scss']
})
export class ProjectTasksComponent implements OnInit {

  @ViewChild('taskDetailDrawer') taskDetailDrawer?: MatDrawer;
  taskStacks: TaskStack[] = [];
  isShowCreatePane = false;

  ngOnInit(): void {
    this.taskStacks = this.getProjectTaskStacks();
  }

  dropTaskList(event: CdkDragDrop<any, any>) {
    moveItemInArray(this.taskStacks, event.previousIndex, event.currentIndex);
  }

  dropTaskCard(event: CdkDragDrop<any, any>) {
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
    this.taskDetailDrawer?.open();
  }

  private getProjectTaskStacks(): TaskStack[] {
    const stacks: TaskStack[] = [];
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
