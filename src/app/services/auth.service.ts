import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ConfigService } from './config.service';
import { SignupInfo } from '../models/signup';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpService, private config: ConfigService) { }

  public login(info: {username: string, password: string}) {
    return this.http.post(this.config.login, info)
  }

  public logout() {
    return this.http.post(this.config.logout, null);
  }

  public register(info: SignupInfo) {
    return this.http.post(this.config.register, info);
  }

}
