import { TestBed } from '@angular/core/testing';

import { SelectAreaService } from './select-area.service';

describe('SelectAreaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectAreaService = TestBed.get(SelectAreaService);
    expect(service).toBeTruthy();
  });
});
