import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBurgerComponent } from './edit-burger.component';

describe('EditBurgerComponent', () => {
  let component: EditBurgerComponent;
  let fixture: ComponentFixture<EditBurgerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditBurgerComponent]
    });
    fixture = TestBed.createComponent(EditBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
