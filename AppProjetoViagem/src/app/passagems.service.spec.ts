import { TestBed } from '@angular/core/testing';

import { PassagemsService } from './passagems.service';

describe('PassagemsService', () => {
  let service: PassagemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassagemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
