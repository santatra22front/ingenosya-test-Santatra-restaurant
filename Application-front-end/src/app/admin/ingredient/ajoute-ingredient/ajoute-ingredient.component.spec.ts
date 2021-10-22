import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteIngredientComponent } from './ajoute-ingredient.component';

describe('AjouteIngredientComponent', () => {
  let component: AjouteIngredientComponent;
  let fixture: ComponentFixture<AjouteIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouteIngredientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
