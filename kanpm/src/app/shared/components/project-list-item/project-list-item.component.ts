import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { Project } from 'types/project';

@Component({
  selector: 'kanpm-project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListItemComponent implements OnInit {

  @Input() project: Project;
  @Output() projectClick = new EventEmitter<Project>();

  constructor() { }

  ngOnInit(): void {
  }

  emitProjectItemClick() {
    this.projectClick.emit(this.project);
  }

}
