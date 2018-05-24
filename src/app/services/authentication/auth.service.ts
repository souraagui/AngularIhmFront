import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler, HttpHeaders,
  HttpInterceptor,
  HttpRequest, HttpResponseBase
} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs/internal/observable/throwError";


@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor {


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  hede: String;
  url = 'http://localhost:8080/angularsecuring/api/create';
  httpresponse: HttpRequest<any>;
  constructor(private http: HttpClient) {
  }

  getUserDetails(username, password) {
    this.hede = this.httpresponse.url;
    console.log(this.hede)
    return this.http.post(
      this.url, {
        username, password
      }).subscribe(
      data => {
        console.log(data, "is what we get")

      })

  }

  addHero(username, password) {
    return this.http.post(username, password).pipe()
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    return next.handle(req);
  }

}

