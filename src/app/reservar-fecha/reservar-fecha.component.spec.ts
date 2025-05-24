import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarFechaComponent } from './reservar-fecha.component';

describe('ReservarFechaComponent', () => {
  let component: ReservarFechaComponent;
  let fixture: ComponentFixture<ReservarFechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservarFechaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservarFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
