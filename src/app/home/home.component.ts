import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup/*, Validators*/ } from '@angular/forms';

import { User, report } from '../_models';
import { UserService, AuthenticationService, SearchService, HistoryService } from '../_services';

@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
    searchForm: FormGroup;
    currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];
    Report: report;
    historyReport: report;

    constructor(
        private authenticationService: AuthenticationService,
        private formBuilder: FormBuilder,
        private userService: UserService,
        private data: SearchService,
        private history: HistoryService
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }

    get f() { return this.searchForm.controls; }

    ngOnInit() {
        this.historyReport = this.history.getReports();
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
        this.data.getUserReport( this.f.userEmail.value, Report => {
          this.Report = Report;
          this.history.addReport(Report, this.currentUser.id);
          this.historyReport = this.history.getReports();
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