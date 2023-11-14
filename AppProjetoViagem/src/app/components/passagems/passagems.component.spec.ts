import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagemsComponent } from './passagems.component';

describe('PassagemsComponent', () => {
  let component: PassagemsComponent;
  let fixture: ComponentFixture<PassagemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassagemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PassagemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
