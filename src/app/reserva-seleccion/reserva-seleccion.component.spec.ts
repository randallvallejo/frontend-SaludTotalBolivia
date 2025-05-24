import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaSeleccionComponent } from './reserva-seleccion.component';

describe('ReservaSeleccionComponent', () => {
  let component: ReservaSeleccionComponent;
  let fixture: ComponentFixture<ReservaSeleccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservaSeleccionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaSeleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
