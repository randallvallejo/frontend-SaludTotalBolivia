import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadritoDetallesComponent } from './cuadrito-detalles.component';

describe('CuadritoDetallesComponent', () => {
  let component: CuadritoDetallesComponent;
  let fixture: ComponentFixture<CuadritoDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuadritoDetallesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuadritoDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
