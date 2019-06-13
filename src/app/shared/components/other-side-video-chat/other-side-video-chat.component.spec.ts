import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherSideVideoChatComponent } from './other-side-video-chat.component';

describe('OtherSideVideoChatComponent', () => {
  let component: OtherSideVideoChatComponent;
  let fixture: ComponentFixture<OtherSideVideoChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherSideVideoChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherSideVideoChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
