import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './group-home.component.html',
  styleUrls: ['./group-home.component.scss']
})
export class GroupHomeComponent implements OnInit {

  approachingDeadlineTasks = new Array(5);
  starredProjects = new Array(2);

  constructor() { }

  ngOnInit(): void {
  }

}
