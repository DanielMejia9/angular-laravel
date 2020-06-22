import { TestBed } from '@angular/core/testing';

import { LocationServicesService } from './location-services.service';

describe('LocationServicesService', () => {
  let service: LocationServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
