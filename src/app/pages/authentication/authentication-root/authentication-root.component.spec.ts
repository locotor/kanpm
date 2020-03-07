import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationRootComponent } from './authentication-root.component';

describe('AuthenticationComponent', () => {
  let component: AuthenticationRootComponent;
  let fixture: ComponentFixture<AuthenticationRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
