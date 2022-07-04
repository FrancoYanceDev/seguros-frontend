import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEscritorioComponent } from './menu-escritorio.component';

describe('MenuEscritorioComponent', () => {
  let component: MenuEscritorioComponent;
  let fixture: ComponentFixture<MenuEscritorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuEscritorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEscritorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
