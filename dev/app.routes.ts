import { provideRouter, RouterConfig }  from '@angular/router';

import { crisisCenterRoutes } from './crisis-center/crisis-center.routes';
import { heroesRoutes }       from './heroes/heroes.routes';
import { profileRoutes }      from './profile/profile.routes';
import { loginRoutes,
         authProviders }      from './login.routes';

import { CanDeactivateGuard } from './interfaces';

export const routes: RouterConfig = [
  ...heroesRoutes,
  ...loginRoutes,
  ...profileRoutes
];

export const appRouterProviders = [
  provideRouter(routes),
  authProviders,
  CanDeactivateGuard
];


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/