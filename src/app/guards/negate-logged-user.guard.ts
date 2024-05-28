import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

export const negateLoggedUserGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const localStorageService = inject(LocalStorageService);

  if (localStorageService.getToken() && state.url === '/auth/login') {
    router.navigateByUrl('/');
    return false;
  }

  return true;
};
