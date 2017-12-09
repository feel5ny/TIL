import { TestBed, inject } from '@angular/core/testing';

import { OneService } from './one.service';

describe('OneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OneService]
    });
  });

  it('should be created', inject([OneService], (service: OneService) => {
    expect(service).toBeTruthy();
  }));
});
