import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospedagemsComponent } from './hospedagems.component';

describe('HospedagemsComponent', () => {
  let component: HospedagemsComponent;
  let fixture: ComponentFixture<HospedagemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospedagemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HospedagemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
