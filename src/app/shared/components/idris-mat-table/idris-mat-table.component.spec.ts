import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdrisMatTableComponent } from './idris-mat-table.component';

describe('IdrisMatTableComponent', () => {
  let component: IdrisMatTableComponent;
  let fixture: ComponentFixture<IdrisMatTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdrisMatTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdrisMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
