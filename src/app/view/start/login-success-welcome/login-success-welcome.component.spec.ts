import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSuccessWelcomeComponent } from './login-success-welcome.component';

describe('LoginSuccessWelcomeComponent', () => {
  let component: LoginSuccessWelcomeComponent;
  let fixture: ComponentFixture<LoginSuccessWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSuccessWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSuccessWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
