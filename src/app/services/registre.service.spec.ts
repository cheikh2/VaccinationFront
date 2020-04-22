import { TestBed } from '@angular/core/testing';

import { RegistreService } from './registre.service';

describe('RegistreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistreService = TestBed.get(RegistreService);
    expect(service).toBeTruthy();
  });
});
