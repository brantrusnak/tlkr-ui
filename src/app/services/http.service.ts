import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  headers = new HttpHeaders({ Accept: 'application/json' });

  constructor(private http: HttpClient) { }

  anonGet(path: string): Observable<any> {
    return this.http
      .get(path, {
        headers: this.headers,
        withCredentials: true
      })
      .pipe(map(this.extractData));
  }

  get(path: string, params?: any): Observable<any> {
    return this.http
      .get(path, {
        headers: this.headers,
        withCredentials: true,
        params
      })
      .pipe(
        map(this.extractData),
        catchError(this.checkAuth.bind(this))
      );
  }

  post(path: string, body, params?, customHeaders?, put?): Observable<any> {
    return this.http
      .post(path, body, {
        headers: customHeaders || this.headers,
        params,
        withCredentials: true
      })
      .pipe(
        map(this.extractData),
        catchError(this.checkAuth.bind(this))
      );
  }

  put(path: string, body: any, headers?: any, params?: any): Observable<any> {
    return this.http
      .put(path, body, {
        headers: headers || this.headers,
        params,
        withCredentials: true
      })
      .pipe(
        map(this.extractData),
        catchError(this.checkAuth.bind(this))
      );
  }

  delete(path: string, headers?: any, params?: any) {
    return this.http
      .delete(path, {
        headers: headers || this.headers,
        params,
        withCredentials: true
      })
      .pipe(
        map(this.extractData),
        catchError(this.checkAuth.bind(this))
      );
  }

  private extractData(res: Response) {
    return res;
  }

  // Display error if logged in, otherwise redirect to IDP
  private checkAuth(error: any) {
    if (error && error.status === 401) {
      // this.redirectIfUnauth(error);
    } else {
      // this.displayError(error);
    }

    if (error.status === 200) {
      // This helps in case we have an empty response from backend.
      const res = new HttpResponse({
        body: error.error.text,
        headers: error.headers,
        status: error.status,
        statusText: error.statusText,
        url: error.url
      });
      return of(res);
    }
    throw error;
  }
}