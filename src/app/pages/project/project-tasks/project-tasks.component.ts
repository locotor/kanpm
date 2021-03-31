import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Task, TaskStack } from 'core/types/task';
import { MatDrawer } from '@angular/material/sidenav';
import { TaskStackService } from 'core/services/task-stack.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { TaskApi } from 'core/services/task-api';
import { LinkedListElement } from 'core/types/common';

@Component({
  templateUrl: './project-tasks.component.html',
  styleUrls: ['./project-tasks.component.scss']
})
export class ProjectTasksComponent implements OnInit {

  @ViewChild('taskDetailDrawer') taskDetailDrawer?: MatDrawer;
  taskStacks: TaskStack[] = [];
  tasksMap = new Map<string, Task[]>();
  isShowStackCreateForm = false;
  currentProjectId?: string;
  stackCreateForm = this.fb.group({
    stackName: ['', [
      Validators.required,
      Validators.maxLength(64)
    ]]
  });

  get stackName() { return this.stackCreateForm.get('stackName'); }

  constructor(
    private taskStackApi: TaskStackService,
    private taskApi: TaskApi,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.currentProjectId = this.route.snapshot.parent?.paramMap.get('id') as string;
    this.getTaskStacks();
  }

  moveTaskStack(event: CdkDragDrop<any, any>) {
    const oldPrevious = this.taskStacks[event.previousIndex - 1];
    moveItemInArray(this.taskStacks, event.previousIndex, event.currentIndex);
    const newPrevious = this.taskStacks[event.currentIndex - 1];
    const newNext = this.taskStacks[event.currentIndex + 1];
    const current = this.taskStacks[event.currentIndex];
    /* 保存变更,如果发生错误，则恢复顺序 */
    this.taskStackApi.moveTaskStack(oldPrevious, newPrevious, newNext.id, current).subscribe(reps => {
      if (!reps.data) {
        moveItemInArray(this.taskStacks, event.currentIndex, event.previousIndex);
      }
    });
  }

  moveTaskCard(event: CdkDragDrop<any, any>) {
    let taskList = [];
    if (event.previousContainer === event.container) {
      taskList = event.container.data;
      const oldPrevious = taskList[event.previousIndex - 1];
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      const newPrevious = taskList[event.currentIndex - 1];
      const newNext = taskList[event.currentIndex + 1];
      const current = taskList[event.currentIndex];
      this.taskApi.moveTask(oldPrevious, newPrevious, newNext.id, current).subscribe(reps => {
        if (!reps.data) {
          moveItemInArray(this.taskStacks, event.currentIndex, event.previousIndex);
        }
      });
    } else {
      const previousList = event.previousContainer.data;
      taskList = event.container.data;
      const oldPrevious = previousList[event.previousIndex - 1];
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      const newPrevious = taskList[event.currentIndex - 1];
      const newNext = taskList[event.currentIndex + 1];
      const current = taskList[event.currentIndex];
      this.taskApi.moveTask(oldPrevious, newPrevious, newNext.id, current).subscribe(reps => {
        if (!reps.data) {
          moveItemInArray(this.taskStacks, event.currentIndex, event.previousIndex);
          transferArrayItem(event.container.data.tasks, event.previousContainer.data.tasks,
            event.currentIndex,
            event.previousIndex);
        }
      });
    }
  }

  test() {
    this.taskDetailDrawer?.open();
  }

  createTaskStack(): void {
    if (this.stackCreateForm.invalid || !this.currentProjectId) { return; }
    const previousId = this.taskStacks[this.taskStacks.length - 1]?.id;
    this.taskStackApi.createTaskStack(previousId, this.currentProjectId, this.stackName?.value).subscribe(resp => {
      this.isShowStackCreateForm = false;
      // FIXME 不需要全部刷新，改为id获取新增的列表对象，加入已有的。
      this.getTaskStacks();
    });
  }

  createTask(task: { description: string }, stackId: string): void {
    const list = this.tasksMap.get(stackId) || [];
    const previousId = list[list.length - 1]?.id;
    this.taskApi.createTask(previousId, task.description, stackId).subscribe(resp => {
      const oldList = this.tasksMap.get(stackId);
      const newList = oldList ? [...oldList, resp.data] : [resp.data];
      this.tasksMap.set(stackId, newList);
    });
  }

  private getTaskStacks(): void {
    if (!this.currentProjectId) { return; }
    this.taskStackApi.getStackListByProjectId(this.currentProjectId).subscribe(resp => {
      this.taskStacks = [];
      this.sortLinkedStacks(resp.data as LinkedListElement[], this.taskStacks as LinkedListElement[]);
      this.taskStacks.forEach(stack => {
        this.getTasks(stack.id);
      });
    });
  }

  private getTasks(stackId: string): void {
    this.taskApi.getTasks(stackId).subscribe(resp => {
      let temp: any[] = [];
      if (resp.data.length) {
        this.sortLinkedStacks(resp.data as LinkedListElement[], temp)
      }
      this.tasksMap.set(stackId, temp);
    });
  }

  // TODO 改为通用
  private sortLinkedStacks(stacks: LinkedListElement[], target: LinkedListElement[], nextId?: string) {
    let index = -1;
    if (!nextId) {
      index = stacks.findIndex((stack) => !stack || !stack.nextId);
    } else {
      index = stacks.findIndex((stack) => stack.nextId === nextId);
    }

    if (index < 0) {
      throw new Error('列表数据出错');
    }
    const currentStack = stacks.splice(index, 1)[0];
    target.unshift(currentStack);

    if (stacks.length) {
      this.sortLinkedStacks(stacks, target, currentStack.id);
    }
  }

}

