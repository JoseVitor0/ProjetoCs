import { TestBed } from '@angular/core/testing';

import { CarroDeAluguelsService } from './carro-de-aluguels.service';

describe('CarroDeAluguelsService', () => {
  let service: CarroDeAluguelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarroDeAluguelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
