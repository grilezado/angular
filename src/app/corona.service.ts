import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';  // Import it up here
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  private httpUrl : string = 'https://api.covid19api.com/total/country/philippines';

  constructor(private http:HttpClient) { }

  private handleError<T> (operation = 'operation', result?:T) {
    return (error: any) : Observable<T> =>{
      console.error(error, `Operation: ${operation}`);

      return of(result as T);
    }
  }

  getCurrentUpdate() : Observable<Object>{
    return this.http.get(this.httpUrl)
    .pipe(
      tap(
        objects => console.log(`Successfully fetched!`)
        ),catchError(
        this.handleError('getCurrentUpdate',[])
        )
    );
  };

}
