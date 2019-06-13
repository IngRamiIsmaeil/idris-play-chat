import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateChatOverviewComponent } from './private-chat-overview.component';

describe('PrivateChatOverviewComponent', () => {
  let component: PrivateChatOverviewComponent;
  let fixture: ComponentFixture<PrivateChatOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateChatOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateChatOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
