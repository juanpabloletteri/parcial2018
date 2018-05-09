import { TestBed, inject } from '@angular/core/testing';

import { NexoService } from './nexo.service';

describe('NexoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NexoService]
    });
  });

  it('should be created', inject([NexoService], (service: NexoService) => {
    expect(service).toBeTruthy();
  }));
});
