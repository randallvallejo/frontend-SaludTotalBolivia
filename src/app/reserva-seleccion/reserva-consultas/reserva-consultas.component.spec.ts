import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaConsultasComponent } from './reserva-consultas.component';

describe('ReservaConsultasComponent', () => {
  let component: ReservaConsultasComponent;
  let fixture: ComponentFixture<ReservaConsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservaConsultasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
