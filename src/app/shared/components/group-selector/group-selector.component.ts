import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'kanpm-group-selector',
  templateUrl: './group-selector.component.html',
  styleUrls: ['./group-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupSelectorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
