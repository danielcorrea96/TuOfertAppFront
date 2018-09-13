import { TestBed, inject } from '@angular/core/testing';

import { FuncionesSuperAService } from './funciones-super-a.service';

describe('FuncionesSuperAService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FuncionesSuperAService]
    });
  });

  it('should be created', inject([FuncionesSuperAService], (service: FuncionesSuperAService) => {
    expect(service).toBeTruthy();
  }));
});
