import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  private httpUrl : string = 'https://api.covid19api.com/total/country/philippines';

  constructor(private http:HttpClient) { }

  getCurrentUpdate(){
    return this.http.get(this.httpUrl);
  };

}
