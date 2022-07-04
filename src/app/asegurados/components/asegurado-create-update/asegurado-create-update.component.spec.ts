import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AseguradoCreateUpdateComponent } from './asegurado-create-update.component';

describe('AseguradoCreateUpdateComponent', () => {
  let component: AseguradoCreateUpdateComponent;
  let fixture: ComponentFixture<AseguradoCreateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AseguradoCreateUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AseguradoCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
