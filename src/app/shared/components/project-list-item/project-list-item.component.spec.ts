import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProjectListItemComponent } from './project-list-item.component';

describe('ProjectListItemComponent', () => {
  let component: ProjectListItemComponent;
  let fixture: ComponentFixture<ProjectListItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
