import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierRepasComponent } from './modifier-repas.component';

describe('ModifierRepasComponent', () => {
  let component: ModifierRepasComponent;
  let fixture: ComponentFixture<ModifierRepasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierRepasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierRepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
