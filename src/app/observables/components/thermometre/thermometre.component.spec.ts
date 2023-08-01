import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermometreComponent } from './thermometre.component';

describe('ThermometreComponent', () => {
  let component: ThermometreComponent;
  let fixture: ComponentFixture<ThermometreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThermometreComponent]
    });
    fixture = TestBed.createComponent(ThermometreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
