import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    constructor(private http: HttpClient) { }

    //Were the data is being served
    //https://cors-anywhere.herokuapp.com/ is going to workaround the cors from the API
    public endpoint = "https://cors-anywhere.herokuapp.com/https://www.beenverified.com/hk/dd/teaser/email";

    getUserReport(email, callback) {
        this.http.get(`${this.endpoint}?email=${email}`)
            .subscribe(response => {
                console.log(response);//Is it working?
                callback(response);
            });
    }

}
