import { TestBed } from '@angular/core/testing';

import { AreaDbService } from './area-db.service';

describe('AreaDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AreaDbService = TestBed.get(AreaDbService);
    expect(service).toBeTruthy();
  });
});
