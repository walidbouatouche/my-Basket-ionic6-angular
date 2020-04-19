import { TestBed } from '@angular/core/testing';

import { ProduitDataService } from './produit-data.service';

describe('ProduitDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProduitDataService = TestBed.get(ProduitDataService);
    expect(service).toBeTruthy();
  });
});
