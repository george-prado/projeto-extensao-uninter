import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

export const AuthGuard: CanActivateFn = () => {
  const router = inject(Router);
  const localStorageService = inject(LocalStorageService);
  const tokenStorage = localStorageService.getToken();

  if (tokenStorage) {
    return true;
  } else {
    router.navigate(['auth/login']);
    return false;
  }
};
