import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguroConsultaComponent } from './seguro-consulta.component';

describe('SeguroConsultaComponent', () => {
  let component: SeguroConsultaComponent;
  let fixture: ComponentFixture<SeguroConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguroConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguroConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
