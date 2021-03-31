import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Task, TaskStack } from 'core/types/task';

@Component({
  selector: 'kanpm-task-stack',
  templateUrl: './task-stack.component.html',
  styleUrls: ['./task-stack.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskStackComponent implements OnInit {

  @Input() stack?: TaskStack;
  @Input() tasks: Task[] = [];
  @Output() moveTask = new EventEmitter();
  @Output() newTask = new EventEmitter();
  isLoading = false;
  isShowCreatePane = false;
  taskCreateForm = this.fb.group({
    description: ['', [
      Validators.required,
      Validators.maxLength(128)
    ]]
  });
  get description() { return this.taskCreateForm.get('description'); }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  getStackStatus(): string {
    const completed = this.tasks.filter(task => task.isComplete);
    return `${completed.length}/${this.tasks.length}`;
  }

  drop(event: CdkDragDrop<string[]>) {
    this.moveTask.emit(event);
  }

  emitNewTask(): void {
    this.newTask.emit(this.taskCreateForm.value);
    this.taskCreateForm.reset()
  }

}
