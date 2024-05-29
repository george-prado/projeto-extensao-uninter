import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { negateLoggedUserGuard } from './negate-logged-user.guard';

describe('negateLoggedUserGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => negateLoggedUserGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
