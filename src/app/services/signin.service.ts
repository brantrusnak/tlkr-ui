import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { BehaviorSubject } from 'rxjs';
import { NotificationService } from './notification.service';
import { SigninInfo } from '../models/signin';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  private $requesting = new BehaviorSubject<boolean>(false);
  private $success = new BehaviorSubject<boolean>(null);
  private $error = new BehaviorSubject<boolean>(null);
  public requesting = this.$requesting.asObservable();
  public success = this.$success.asObservable();
  public error = this.$error.asObservable();

  constructor(private auth: AuthService, private user: UserService, private notification: NotificationService) {}

  public async request(info: SigninInfo, callback?: (success: boolean) => void) {
    this.$requesting.next(true);
    this.$error.next(false);
    this.$success.next(false);
    try {
      let response = await this.auth.login(info).toPromise();
      this.auth.storeToken(response.token);
      this.user.getSelf();
      this.$error.next(false);
      this.$success.next(true);
      this.$requesting.next(false);
      if (callback) {
        callback(true);
      }
      this.notification.create({
        type: 'global',
        style: 'success',
        message: 'Success!'
      });
    } catch (error) {
      this.$error.next(true);
      this.$success.next(false);
      this.$requesting.next(false);
      if (callback) {
        callback(false);
      }
      this.notification.create({
        type: 'global',
        style: 'danger',
        message: `Failed! ${error.error.message}`
      });
    }
  }

}
