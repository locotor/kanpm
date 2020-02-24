import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  relevantNavs = [
    { name: '首页', icon: 'home' },
    { name: '我执行的', icon: 'check_box' },
    { name: '我参与的', icon: 'check_box' },
    { name: '我创建的', icon: 'check_box' },
  ];

  projects = [
    { name: '项目1' },
    { name: '项目2' },
    { name: '项目3' },
    { name: '项目4' },
    { name: '项目5' }
  ];

  collaborators = [
    { name: '张三' },
    { name: '李四' },
    { name: '王麻子' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
