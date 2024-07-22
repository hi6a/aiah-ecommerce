import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from './services/user-auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(UserAuthService);
  const router = inject(Router);

  if(auth.isLoggedIn()){
    return true;
  }
  else {
    router.navigate(['/login'])
    return false;
  }
 
};

