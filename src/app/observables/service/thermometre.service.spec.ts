import { TestBed } from '@angular/core/testing';

import { ThermometreService } from './thermometre.service';

describe('ThermometreService', () => {
  let service: ThermometreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThermometreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
