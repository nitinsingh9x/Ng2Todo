// main entry point
import { bootstrap }          from '@angular/platform-browser-dynamic';
import { AppComponent }       from './app.component';
import { appRouterProviders } from './app.routes';

bootstrap(AppComponent, [
  appRouterProviders
])
.catch(err => console.error(err));


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/