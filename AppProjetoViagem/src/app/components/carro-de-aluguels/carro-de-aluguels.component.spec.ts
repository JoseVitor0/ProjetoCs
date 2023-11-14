import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroDeAluguelsComponent } from './carro-de-aluguels.component';

describe('CarroDeAluguelsComponent', () => {
  let component: CarroDeAluguelsComponent;
  let fixture: ComponentFixture<CarroDeAluguelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarroDeAluguelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarroDeAluguelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
