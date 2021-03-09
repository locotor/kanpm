import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProjectTasksComponent } from './project-tasks.component';

describe('ProjectTasksComponent', () => {
  let component: ProjectTasksComponent;
  let fixture: ComponentFixture<ProjectTasksComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
