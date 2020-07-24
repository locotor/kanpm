import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './team-projects.component.html',
  styleUrls: ['./team-projects.component.scss']
})
export class TeamProjectsComponent implements OnInit {

  starredProjects = new Array(8);

  constructor() { }

  ngOnInit(): void {
  }

}
