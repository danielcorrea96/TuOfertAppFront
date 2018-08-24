import { TestBed, inject } from '@angular/core/testing';

import { NegociosService } from './negocios.service';

describe('NegociosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NegociosService]
    });
  });

  it('should be created', inject([NegociosService], (service: NegociosService) => {
    expect(service).toBeTruthy();
  }));
});
