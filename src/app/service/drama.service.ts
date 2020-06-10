import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DramaService {

  private httpUrl : string = './assets/dramas.json';

  constructor(private http:HttpClient) { }

  private handleError<T> (operation = 'operation', result?:T) {
    return (error: any) : Observable<T> =>{
      console.error(error, `Operation: ${operation}`);

      return of(result as T);
    }
  }

  public getDramas() : Observable<any>{
    return this.http.get(this.httpUrl)
    .pipe(
      tap(
        objects => console.log(`Successfully fetched!`)
        ),catchError(
        this.handleError('Something wrong with fetching dramas... ',[])
        )
    );
  };

}
