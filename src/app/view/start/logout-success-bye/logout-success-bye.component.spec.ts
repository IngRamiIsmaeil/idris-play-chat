import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutSuccessByeComponent } from './logout-success-bye.component';

describe('LogoutSuccessByeComponent', () => {
  let component: LogoutSuccessByeComponent;
  let fixture: ComponentFixture<LogoutSuccessByeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutSuccessByeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutSuccessByeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
