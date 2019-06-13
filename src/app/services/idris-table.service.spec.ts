import { TestBed, inject } from '@angular/core/testing';

import { IdrisTableService } from './idris-table.service';

describe('IdrisTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IdrisTableService]
    });
  });

  it('should be created', inject([IdrisTableService], (service: IdrisTableService) => {
    expect(service).toBeTruthy();
  }));
});
