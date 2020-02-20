import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'kanpm-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
