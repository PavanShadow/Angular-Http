import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


const endpoint = 'https://jsonplaceholder.typicode.com/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})


export class RestService {

  constructor( private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getTodos(): Observable<any> {
    return this.http.get(endpoint + 'todos').pipe(
      map(this.extractData));
  }

  getTodo(id): Observable<any> {
    return this.http.get(endpoint + 'todos/' + id).pipe(
      map(this.extractData));
  }

  addTodo (todo): Observable<any> {
    console.log(todo);
    return this.http.post<any>(endpoint + 'todos', JSON.stringify(todo), httpOptions).pipe(
      tap((todo) => console.log(`added todo w/ id=${todo.id}`)),
      catchError(this.handleError<any>('addTodo'))
    );
  }

  updateTodo (id, todo): Observable<any> {
    return this.http.put(endpoint + 'todos/' + id, JSON.stringify(todo), httpOptions).pipe(
      tap(_ => console.log(`updated todo id=${id}`)),
      catchError(this.handleError<any>('updateTodo'))
    );
  }

  deleteTodo (id): Observable<any> {
    return this.http.delete<any>(endpoint + 'todos/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted todo id=${id}`)),
      catchError(this.handleError<any>('deleteTodo'))
    );
  }
  




  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
