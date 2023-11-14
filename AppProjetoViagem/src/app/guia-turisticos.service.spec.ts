import { TestBed } from '@angular/core/testing';

import { GuiaTuristicosService } from './guia-turisticos.service';

describe('GuiaTuristicosService', () => {
  let service: GuiaTuristicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuiaTuristicosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
