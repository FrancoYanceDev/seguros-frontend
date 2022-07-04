import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguroTablaComponent } from './seguro-tabla.component';

describe('SeguroTablaComponent', () => {
  let component: SeguroTablaComponent;
  let fixture: ComponentFixture<SeguroTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguroTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguroTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
