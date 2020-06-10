import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DramaService {

  private httpUrl : string = './assets/dramas.json';

  constructor(private http:HttpClient) { }

  public getDramas() : Observable<any>{
    return this.http.get(this.httpUrl);
  };

}
