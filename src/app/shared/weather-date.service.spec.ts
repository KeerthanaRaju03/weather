import { TestBed } from '@angular/core/testing';

import { WeatherDateService } from './weather-date.service';

describe('WeatherDateService', () => {
  let service: WeatherDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
