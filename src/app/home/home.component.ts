import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup/*, Validators*/ } from '@angular/forms';

import { User } from '../_models';
import { report } from '../_models';
import { UserService, AuthenticationService } from '../_services';
import { DataService } from '../_services';

@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
    searchForm: FormGroup;
    currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];
    list: report;

    constructor(
        private authenticationService: AuthenticationService,
        private formBuilder: FormBuilder,
        private userService: UserService,
        private data: DataService
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }
    goDetails(Report: report) {

    }

    get f() { return this.searchForm.controls; }

    ngOnInit() {
        //this.list = new report();
        this.loadAllUsers();
        this.searchForm = this.formBuilder.group({
            userEmail: ['']
        });
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

    Search() {
        this.data.getUserReport( this.f.userEmail.value, list => {
          this.list = list;
        })
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