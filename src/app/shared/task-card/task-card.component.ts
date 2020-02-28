import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'kanpm-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskCardComponent implements OnInit {

  @Input() task: { name: string }

  constructor() { }

  ngOnInit(): void {
  }

}
