import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { menucGuard } from './menuc.guard';

describe('menucGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => menucGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
