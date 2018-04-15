import { TestBed, inject } from '@angular/core/testing';

import { JsonTestServiceService } from './json-test-service.service';

describe('JsonTestServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonTestServiceService]
    });
  });

  it('should be created', inject([JsonTestServiceService], (service: JsonTestServiceService) => {
    expect(service).toBeTruthy();
  }));
});
