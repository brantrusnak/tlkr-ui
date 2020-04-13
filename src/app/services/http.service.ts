import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  }

  get(path: string, params?: any): Observable<any> {
    return this.http
      .get(path, {
        headers: this.headers,
        withCredentials: true,
        params
      })
  }

  post(path: string, body, params?, customHeaders?, put?): Observable<any> {
    return this.http
      .post(path, body, {
        headers: customHeaders || this.headers,
        params,
        withCredentials: true
      })
  }

  put(path: string, body: any, headers?: any, params?: any): Observable<any> {
    return this.http
      .put(path, body, {
        headers: headers || this.headers,
        params,
        withCredentials: true
      })
  }

  delete(path: string, headers?: any, params?: any) {
    return this.http
      .delete(path, {
        headers: headers || this.headers,
        params,
        withCredentials: true
      })
  }

}