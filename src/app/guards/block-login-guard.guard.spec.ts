import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { blockLoginGuardGuard } from './block-login-guard.guard';

describe('blockLoginGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => blockLoginGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
