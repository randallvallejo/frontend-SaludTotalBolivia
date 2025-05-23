import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroNotificacionPasadoComponent } from './cuadro-notificacion-pasado.component';

describe('CuadroNotificacionPasadoComponent', () => {
  let component: CuadroNotificacionPasadoComponent;
  let fixture: ComponentFixture<CuadroNotificacionPasadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuadroNotificacionPasadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuadroNotificacionPasadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
