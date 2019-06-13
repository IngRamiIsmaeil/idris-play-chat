import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdrisTableComponent } from './idris-table.component';

describe('IdrisTableComponent', () => {
  let component: IdrisTableComponent;
  let fixture: ComponentFixture<IdrisTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdrisTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdrisTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
