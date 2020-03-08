import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './authentication-root.component.html',
  styleUrls: ['./authentication-root.component.scss']
})
export class AuthenticationRootComponent implements OnInit {

  isLoginTab = true;

  constructor() { }

  ngOnInit(): void {
  }

}
