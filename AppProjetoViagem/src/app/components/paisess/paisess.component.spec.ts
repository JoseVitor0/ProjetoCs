import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisessComponent } from './paisess.component';

describe('PaisessComponent', () => {
  let component: PaisessComponent;
  let fixture: ComponentFixture<PaisessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaisessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaisessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
