import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TaskStack } from 'core/types/task';
import { MatDrawer } from '@angular/material/sidenav';
import { TaskStackService } from 'core/services/task-stack.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './project-tasks.component.html',
  styleUrls: ['./project-tasks.component.scss']
})
export class ProjectTasksComponent implements OnInit {

  @ViewChild('taskDetailDrawer') taskDetailDrawer?: MatDrawer;
  taskStacks: TaskStack[] = [];
  isShowStackCreateForm = false;
  currentProjectId?: string;
  createStackForm = this.fb.group({
    stackName: ['', [
      Validators.required,
      Validators.maxLength(64)
    ]]
  });

  get stackName() { return this.createStackForm.get('stackName'); }

  constructor(
    private taskStackApi: TaskStackService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.currentProjectId = this.route.snapshot.parent?.paramMap.get('id') as string;
    this.getProjectTaskStacks();
  }

  dropTaskList(event: CdkDragDrop<any, any>) {
    const oldPrevious = this.taskStacks[event.previousIndex - 1];
    moveItemInArray(this.taskStacks, event.previousIndex, event.currentIndex);
    const newPrevious = this.taskStacks[event.currentIndex - 1];
    const newNext = this.taskStacks[event.currentIndex + 1];
    const current = this.taskStacks[event.currentIndex];
    /* TODO 保存变更,如果发生错误，则恢复顺序 */
    this.taskStackApi.moveTaskStack(oldPrevious, newPrevious, newNext.id, current).subscribe(reps => {
      if (!reps.data) {
        moveItemInArray(this.taskStacks, event.currentIndex, event.previousIndex);
      }
    });
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

  createTaskStack(): void {
    if (this.createStackForm.invalid || !this.currentProjectId) { return; }
    const previousId = this.taskStacks[this.taskStacks.length - 1]?.id;
    this.taskStackApi.createTaskStack(previousId, this.currentProjectId, this.stackName?.value).subscribe(resp => {
      this.isShowStackCreateForm = false;
      this.getProjectTaskStacks();
    });
  }

  private getProjectTaskStacks(): void {
    if (!this.currentProjectId) { return; }
    this.taskStackApi.getStackListByProjectId(this.currentProjectId).subscribe(resp => {
      this.taskStacks = [];
      this.sortLinkedStacks(resp.data);
    });
  }

  private sortLinkedStacks(stacks: TaskStack[], nextId?: string) {
    let index = -1;
    if (!nextId) {
      index = stacks.findIndex((stack) => !stack.nextStackId);
    } else {
      index = stacks.findIndex((stack) => stack.nextStackId === nextId);
    }

    if (index < 0) { throw new Error('任务列表数据出错'); }
    const currentStack = stacks.splice(index, 1)[0];
    this.taskStacks.unshift(currentStack);

    if (stacks.length) {
      this.sortLinkedStacks(stacks, currentStack.id);
    }
  }

}

