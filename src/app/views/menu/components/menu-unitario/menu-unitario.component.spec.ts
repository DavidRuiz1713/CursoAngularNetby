import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuUnitarioComponent } from './menu-unitario.component';

describe('MenuUnitarioComponent', () => {
  let component: MenuUnitarioComponent;
  let fixture: ComponentFixture<MenuUnitarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuUnitarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuUnitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
