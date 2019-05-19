import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

    //Were the data is being served
    //https://cors-anywhere.herokuapp.com/ is going to workaround the cors from the API
    public endpoint = "https://cors-anywhere.herokuapp.com/https://www.beenverified.com/hk/dd/teaser/email";

    getUserReport(email, callback) {
        console.log("Invoked getUserReport");
        this.http.get(`${this.endpoint}?email=${email}`)
            .subscribe(response => {
                console.log(response);//Is it working?
                callback(response);
            });

        //const list = [
        //new Coffee("Double Espresso","Sunny Cafe", new PlaceLocation("123 Market St","San Francisco")),
        //new Coffee("Caramel Americano","StarCoffee", new PlaceLocation("Gran Via 34","Marid"))
        //]
        //callback (list);
    }


    

   /* getUserdReport() {
        var baseUrl = "https://cors-anywhere.herokuapp.com/https://www.beenverified.com/hk/dd/teaser/email";
        var completeUrl = baseUrl + "?email=" + this.f.userEmail.value
        this.http.get(completeUrl)
            .subscribe(response => {
                console.log(response);//Is it working?
                //this.list = response;
            });
    }

    save(coffee, callback) {
      if (coffee._id) {
        //its an update
        this.http.put(`${this.endpoint}/coffees/${coffee._id}`, coffee)
        .subscribe(response => {
          callback(true);
        })
      } else {
        //its an insert
        this.http.post(`${this.endpoint}/coffees/`, coffee)
        .subscribe(response => {
          callback(true);
        })
      }
    }*/
}
