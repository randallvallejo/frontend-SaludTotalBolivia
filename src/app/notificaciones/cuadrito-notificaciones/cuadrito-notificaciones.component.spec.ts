import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadritoNotificacionesComponent } from './cuadrito-notificaciones.component';

describe('CuadritoNotificacionesComponent', () => {
  let component: CuadritoNotificacionesComponent;
  let fixture: ComponentFixture<CuadritoNotificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuadritoNotificacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuadritoNotificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
