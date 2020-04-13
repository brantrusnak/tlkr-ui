import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ConfigService } from './config.service';
import { SignupInfo } from '../models/signup';
import { SigninInfo } from '../models/signin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpService, private config: ConfigService) { }

  public login(info: SigninInfo) {
    return this.http.post(this.config.login, info)
  }

  public logout() {
    return this.http.post(this.config.logout, null);
  }

  public register(info: SignupInfo) {
    return this.http.post(this.config.register, info);
  }

}
