import { TestBed, inject } from '@angular/core/testing';

import { ServerServiceService } from './server.service';

describe('ServerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerServiceService]
    });
  });

  it('should be created', inject([ServerServiceService], (service: ServerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
