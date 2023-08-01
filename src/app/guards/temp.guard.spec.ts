import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { tempGuard } from './temp.guard';

describe('tempGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => tempGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
