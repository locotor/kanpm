import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TeamRootComponent } from './team-root.component';

describe('TeamComponent', () => {
  let component: TeamRootComponent;
  let fixture: ComponentFixture<TeamRootComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
