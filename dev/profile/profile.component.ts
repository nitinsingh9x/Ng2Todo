import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS} from '@angular/http';
import { GithubService }    from '../services/github.service';

@Component({
    selector: 'profile',
    templateUrl: '../dev/profile/profile.component.html'
})
export class ProfileComponent  {
     user:any[];
     repos: Array<any>;
     username:string;

    constructor(private _githubService:GithubService) {
        
     }

        searchUser(){
            
            //Update Username
            this._githubService.updateUser(this.username);
            
             this._githubService.getUser().subscribe(user => {
            this.user = user;

        })

        this._githubService.getRepos().subscribe(repos => {
            this.repos = repos;

        })
        }

   

}