import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TeamHomeComponent } from './team-home.component';


describe('TeamHomeComponent', () => {
  let component: TeamHomeComponent;
  let fixture: ComponentFixture<TeamHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
