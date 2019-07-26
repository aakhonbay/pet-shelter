import { TestBed } from '@angular/core/testing';

import { PetShelterService } from './pet-shelter.service';

describe('PetShelterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetShelterService = TestBed.get(PetShelterService);
    expect(service).toBeTruthy();
  });
});
