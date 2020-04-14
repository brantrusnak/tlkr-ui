import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ConfigService } from './config.service';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { AuthService } from './auth.service';
import { SignupInfo } from '../models/signup';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private $user = new BehaviorSubject<User>(null);
  public user = this.$user.asObservable();
  public isLoggedIn = false;

  constructor(private http: HttpService, private config: ConfigService, private auth: AuthService, private alert: AlertService) { }

  public initalize() {
    let token = this.auth.getToken();
    if(token) {
      this.isLoggedIn = true;
      return this.getSelf();
    }
    return false
  }

  public async signup(info: SignupInfo, callback?: (success: boolean) => void) {
    try{
      await this.auth.register(info).toPromise();
      this.alert.create({
        type: 'global',
        style: 'success',
        message: 'Success!'
      });
      if (callback) {
        callback(true);
      }
    } catch (error) {
      this.alert.create({
        type: 'global',
        style: 'danger',
        message: `Failed! ${error.error.message}`
      });
      if(callback) {
        callback(false);
      }
    }
  }

  public async signin(info: SignupInfo, callback?: (success: boolean) => void) {
    try {
      let response = await this.auth.login(info).toPromise();
      this.auth.storeToken(response.token);
      this.getSelf();
      this.alert.create({
        type: 'global',
        style: 'success',
        message: 'Success!'
      });
      if (callback) {
        callback(true);
      }
    } catch (error) {
      this.alert.create({
        type: 'global',
        style: 'danger',
        message: `Failed! ${error.error.message}`
      });
      if (callback) {
        callback(false);
      }
    }
  }

  public async signout() {
    this.auth.logout().toPromise();
    this.auth.clearToken();
    this.$user.next(null);
    this.isLoggedIn = false;
  }

  public async getSelf() {
    let response = await this.http.get(this.config.user).toPromise();
    this.$user.next(response);
    this.isLoggedIn = true;
    return true;
  }

  public getUserById() {
    // TODO: Implement.
  }

  public async update(values: any, callback: () => void) {
    await this.http.put(this.config.user, values).toPromise();
    await this.getSelf();
    if(callback) {
      callback();
    }
  }

}
