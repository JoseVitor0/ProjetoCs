import { TestBed } from '@angular/core/testing';

import { HospedagemsService } from './hospedagems.service';

describe('HospedagemsService', () => {
  let service: HospedagemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospedagemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
