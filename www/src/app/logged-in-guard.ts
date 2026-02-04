import { CanActivateChildFn } from '@angular/router';

export const loggedInGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
