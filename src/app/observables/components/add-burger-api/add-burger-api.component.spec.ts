import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBurgerApiComponent } from './add-burger-api.component';

describe('AddBurgerApiComponent', () => {
  let component: AddBurgerApiComponent;
  let fixture: ComponentFixture<AddBurgerApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBurgerApiComponent]
    });
    fixture = TestBed.createComponent(AddBurgerApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
