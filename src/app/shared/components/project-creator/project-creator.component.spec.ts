import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProjectCreatorComponent } from './project-creator.component';

describe('ProjectCreatorComponent', () => {
  let component: ProjectCreatorComponent;
  let fixture: ComponentFixture<ProjectCreatorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
