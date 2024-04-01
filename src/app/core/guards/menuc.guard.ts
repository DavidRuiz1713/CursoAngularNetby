import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { of, tap } from 'rxjs';

export const menucGuard: CanActivateChildFn = (childRoute, state) => {
  const router = inject(Router);
  const canAccessToMenu = localStorage.getItem('isAuthenticated') === 'true';

  return of(canAccessToMenu).pipe(
    // delay(3000),
    tap((canAccessToMenu: any) => {
      if (!canAccessToMenu) {
        router.navigateByUrl('/login');
      }
    })
  );
};
