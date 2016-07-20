import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';
import { DialogService }  from './dialog.service';
import { GithubService }    from './services/github.service';

@Component({
  selector: 'my-app',
  templateUrl : '../dev/app.component.html',
  providers:  [
    GithubService,
    HTTP_PROVIDERS,
    DialogService
  ],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/