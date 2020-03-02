import { Component, OnInit, ViewChild } from '@angular/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  templateUrl: './project-tasks.component.html',
  styleUrls: ['./project-tasks.component.scss']
})
export class ProjectTasksComponent implements OnInit {

  @ViewChild('taskDetailDrawer') taskDetailDrawer;
  taskLists = [];
  isShowCreatePane = false;

  ngOnInit(): void {
    for (let index = 0; index < 3; index++) {
      const taskList = {
        id: `${index}`,
        name: '测试任务列表0' + index,
        connected: index !== 2 ? `${index + 1}` : '0',
        tasks: []
      };
      const random = Math.floor(Math.random() * 5 + 1);
      for (let taskID = 0; taskID < random; taskID++) {
        taskList.tasks.push({
          name: '任务' + taskID
        });
      }
      this.taskLists.push(taskList);
    }
  }

  dropTaskList(event) {
    moveItemInArray(this.taskLists, event.previousIndex, event.currentIndex);
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

}
