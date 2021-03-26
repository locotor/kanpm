import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TaskStack } from 'core/types/task';
import { MatDrawer } from '@angular/material/sidenav';
import { TaskStackService } from 'core/services/task-stack.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './project-tasks.component.html',
  styleUrls: ['./project-tasks.component.scss']
})
export class ProjectTasksComponent implements OnInit {

  @ViewChild('taskDetailDrawer') taskDetailDrawer?: MatDrawer;
  taskStacks: TaskStack[] = [];
  isShowCreatePane = false;
  currentProjectId?: string;

  constructor(
    private taskStackApi: TaskStackService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.currentProjectId = this.route.snapshot.parent?.paramMap.get('id') as string;
    this.getProjectTaskStacks();
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

  private getProjectTaskStacks(): void {
    if (!this.currentProjectId) { return; }
    this.taskStackApi.getStackListByProjectId(this.currentProjectId).subscribe(resp => {
      this.taskStacks = resp.data;
    });
  }

}
