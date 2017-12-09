import { TestBed, inject } from '@angular/core/testing';

import { FactoryService } from './factory.service';

describe('FactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FactoryService]
    });
  });

  it('should be created', inject([FactoryService], (service: FactoryService) => {
    expect(service).toBeTruthy();
  }));
});
