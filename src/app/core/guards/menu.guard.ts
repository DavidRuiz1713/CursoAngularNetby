import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { delay, of, tap } from 'rxjs';

export const menuGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const canAccessToMenu = localStorage.getItem('canAccessToMenu') === 'true';

  return of(canAccessToMenu).pipe(
    // delay(3000),
    tap((canAccessToMenu) => {
      if (!canAccessToMenu) {
        router.navigateByUrl('/dashboard');
      }
    })
  );
};
