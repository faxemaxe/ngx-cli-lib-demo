import { TestBed, inject } from '@angular/core/testing';

import { NgxCliLibDemoCrudService } from './ngx-cli-lib-demo-crud.service';

describe('NgxCliLibDemoCrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxCliLibDemoCrudService]
    });
  });

  it('should be created', inject([NgxCliLibDemoCrudService], (service: NgxCliLibDemoCrudService) => {
    expect(service).toBeTruthy();
  }));
});
