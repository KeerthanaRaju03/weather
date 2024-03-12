import { TestBed } from '@angular/core/testing';

import { MonthlyApiService } from './monthly-api.service';

describe('MonthlyApiService', () => {
  let service: MonthlyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthlyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
