import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';

@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
    searchForm: FormGroup;
    currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];

    constructor(
        private authenticationService: AuthenticationService,
        private formBuilder: FormBuilder,
        private userService: UserService,
        private http: HttpClient
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }

    get f() { return this.searchForm.controls; }

    ngOnInit() {
        this.loadAllUsers();
        this.searchForm = this.formBuilder.group({
            userEmail: ['']
        });
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

    

    getUserReport() {
        var baseUrl = "https://www.beenverified.com/hk/dd/teaser/email";
        var completeUrl = baseUrl + "?email=" + this.f.userEmail.value
        const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
        headers.append('Access-Control-Allow-Methods', 'GET');
        this.http.get(completeUrl, { headers: headers })
        .subscribe(response => {
          console.log(response);//Is it working?
          
        });
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers()
        });
    }

    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }
}