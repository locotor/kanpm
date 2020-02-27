import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'kanpm-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent implements OnInit {

  @Input() taskList;

  constructor() { }

  ngOnInit(): void {
  }

  dropTaskCard(event) {
    moveItemInArray(this.taskList.tasks, event.previousIndex, event.currentIndex);
    console.log(event);
  }
}
