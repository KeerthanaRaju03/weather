import { TestBed } from '@angular/core/testing';

import { WeeklyApiService } from './weekly-api.service';

describe('WeeklyApiService', () => {
  let service: WeeklyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeeklyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
