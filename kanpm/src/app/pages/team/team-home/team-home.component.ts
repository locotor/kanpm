import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './team-home.component.html',
  styleUrls: ['./team-home.component.scss']
})
export class TeamHomeComponent implements OnInit {

  approachingDeadlineTasks = new Array(5);
  starredProjects = new Array(2);

  constructor() { }

  ngOnInit(): void {
  }

}
