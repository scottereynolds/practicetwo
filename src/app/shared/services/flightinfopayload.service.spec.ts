import { TestBed } from '@angular/core/testing';

import { FlightinfopayloadService } from './flightinfopayload.service';

describe('FlightinfopayloadService', () => {
  let service: FlightinfopayloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightinfopayloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
