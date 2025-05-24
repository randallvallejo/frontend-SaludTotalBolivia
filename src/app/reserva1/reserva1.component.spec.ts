import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reserva1Component } from './reserva1.component';

describe('Reserva1Component', () => {
  let component: Reserva1Component;
  let fixture: ComponentFixture<Reserva1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reserva1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reserva1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
