import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './group-home.component.html',
  styleUrls: ['./group-home.component.scss']
})
export class GroupHomeComponent implements OnInit {

  approachingDeadlineTaskList = new Array(5);

  constructor() { }

  ngOnInit(): void {
  }

}
