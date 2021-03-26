import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProjectRootComponent } from './project-root.component';

describe('ProjectComponent', () => {
  let component: ProjectRootComponent;
  let fixture: ComponentFixture<ProjectRootComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectRootComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
