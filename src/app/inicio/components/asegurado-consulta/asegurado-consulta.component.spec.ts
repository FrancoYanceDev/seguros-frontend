import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AseguradoConsultaComponent } from './asegurado-consulta.component';

describe('AseguradoConsultaComponent', () => {
  let component: AseguradoConsultaComponent;
  let fixture: ComponentFixture<AseguradoConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AseguradoConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AseguradoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
