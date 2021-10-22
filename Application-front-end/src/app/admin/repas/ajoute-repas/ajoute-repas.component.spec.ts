import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteRepasComponent } from './ajoute-repas.component';

describe('AjouteRepasComponent', () => {
  let component: AjouteRepasComponent;
  let fixture: ComponentFixture<AjouteRepasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouteRepasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteRepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
