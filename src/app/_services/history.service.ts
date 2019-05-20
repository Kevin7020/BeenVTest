import { Injectable } from '@angular/core';
import { report } from '../_models';

@Injectable({
    providedIn: 'root'
})
export class HistoryService {

    constructor() { }

    // array in local storage
    private reports: any[] = JSON.parse(localStorage.getItem('reports')) || [];

    // Add a new report to the history
    addReport(Report: report) {
        this.reports.push(Report);
        localStorage.setItem('reports', JSON.stringify(this.reports));

    }

    // Get the reports stored
    getReports() {
        let reports = JSON.parse(localStorage.getItem('reports'));
        return reports;
    }


}