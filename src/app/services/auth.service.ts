import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ConfigService } from './config.service';
import { SignupInfo } from '../models/signup';
import { SigninInfo } from '../models/signin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpService, private config: ConfigService) { }

  public storeToken(token: string): void {
    localStorage.setItem('auth', token)
  }

  public getToken(): string {
    return localStorage.getItem('auth');
  }

  public clearToken(): void {
    localStorage.removeItem('auth');
  }

  public login(info: SigninInfo): Observable<any> {
    return this.http.post(this.config.login, info)
  }

  public logout(): Observable<any> {
    return this.http.get(this.config.logout);
  }

  public register(info: SignupInfo): Observable<any> {
    return this.http.post(this.config.register, info);
  }

}
