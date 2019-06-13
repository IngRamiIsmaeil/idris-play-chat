import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowContextMenuComponent } from './row-context-menu.component';

describe('RowContextMenuComponent', () => {
  let component: RowContextMenuComponent;
  let fixture: ComponentFixture<RowContextMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowContextMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
