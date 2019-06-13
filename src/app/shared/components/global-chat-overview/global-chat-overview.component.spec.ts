import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalChatOverviewComponent } from './global-chat-overview.component';

describe('GlobalChatOverviewComponent', () => {
  let component: GlobalChatOverviewComponent;
  let fixture: ComponentFixture<GlobalChatOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalChatOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalChatOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
