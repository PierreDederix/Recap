import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ThermometreService } from '../observables/service/thermometre.service';

export const tempGuard: CanActivateFn = (route, state) => {
  const tempService = inject(ThermometreService);

  return tempService.temperature >= 0;
};
