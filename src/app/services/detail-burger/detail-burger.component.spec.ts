import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBurgerComponent } from './detail-burger.component';

describe('DetailBurgerComponent', () => {
  let component: DetailBurgerComponent;
  let fixture: ComponentFixture<DetailBurgerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailBurgerComponent]
    });
    fixture = TestBed.createComponent(DetailBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
