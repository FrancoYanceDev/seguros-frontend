import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AseguradoTablaComponent } from './asegurado-tabla.component';

describe('AseguradoTablaComponent', () => {
  let component: AseguradoTablaComponent;
  let fixture: ComponentFixture<AseguradoTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AseguradoTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AseguradoTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
