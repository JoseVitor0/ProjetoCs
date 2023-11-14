import { TestBed } from '@angular/core/testing';

import { PaisessService } from './paisess.service';

describe('PaisessService', () => {
  let service: PaisessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaisessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
