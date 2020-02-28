import { Component, OnInit } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  templateUrl: './project-tasks.component.html',
  styleUrls: ['./project-tasks.component.scss']
})
export class ProjectTasksComponent implements OnInit {

  taskLists = [];

  constructor() { }

  ngOnInit(): void {
    for (let index = 0; index < 3; index++) {
      const taskList = {
        name: '测试任务列表0' + index,
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

  dropTaskCard(event, tasks) {
    moveItemInArray(tasks, event.previousIndex, event.currentIndex);
  }

}
