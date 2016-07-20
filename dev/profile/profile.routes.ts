import { RouterConfig }          from '@angular/router';

import { ProfileComponent }      from  '../profile/profile.component'; 
import { CanDeactivateGuard }    from '../interfaces';
import { AuthGuard }             from '../auth.guard';

export const profileRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: '/profile',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    component: ProfileComponent
    
  }
];


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/