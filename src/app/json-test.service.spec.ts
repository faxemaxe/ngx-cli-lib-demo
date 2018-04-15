import { TestBed, inject } from '@angular/core/testing';

import { JsonTestService } from './json-test.service';

describe('JsonTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonTestService]
    });
  });

  it('should be created', inject([JsonTestService], (service: JsonTestService) => {
    expect(service).toBeTruthy();
  }));
});
