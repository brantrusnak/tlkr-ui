import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ConfigService } from './config.service';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private $user = new BehaviorSubject<User>(null);
  public user = this.$user.asObservable();
  public isLoggedIn = false;

  constructor(private http: HttpService, private config: ConfigService, private auth: AuthService) { }

  public initalize() {
    let token = this.auth.getToken();
    if(token) {
      this.isLoggedIn = true;
      return this.getSelf();
    }
    return false
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

  public update() {
    // TODO: Implement.
  }

}
