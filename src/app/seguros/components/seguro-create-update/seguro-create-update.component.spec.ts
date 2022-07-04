import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguroCreateUpdateComponent } from './seguro-create-update.component';

describe('SeguroCreateUpdateComponent', () => {
  let component: SeguroCreateUpdateComponent;
  let fixture: ComponentFixture<SeguroCreateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguroCreateUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguroCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
