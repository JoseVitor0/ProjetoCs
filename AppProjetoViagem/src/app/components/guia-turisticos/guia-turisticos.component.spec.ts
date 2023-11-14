import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaTuristicosComponent } from './guia-turisticos.component';

describe('GuiaTuristicosComponent', () => {
  let component: GuiaTuristicosComponent;
  let fixture: ComponentFixture<GuiaTuristicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuiaTuristicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuiaTuristicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
