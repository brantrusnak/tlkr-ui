import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';
import { SignupInfo } from '../models/signup';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private $requesting = new BehaviorSubject<boolean>(false);
  private $success = new BehaviorSubject<boolean>(null);
  private $error = new BehaviorSubject<boolean>(null);
  public requesting = this.$requesting.asObservable();
  public success = this.$success.asObservable();
  public error = this.$error.asObservable();

  constructor(private auth: AuthService, private alert: AlertService) { }

  public async request(info: SignupInfo, callback?: (success: boolean) => void) {
    this.$requesting.next(true);
    this.$error.next(false);
    this.$success.next(false);
    try {
      await this.auth.register(info).toPromise();
      this.$error.next(false);
      this.$success.next(true);
      this.$requesting.next(false);
      if (callback) {
        callback(true);
      }
      this.alert.create({
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
      this.alert.create({
        type: 'global',
        style: 'danger',
        message: `Failed! ${error.error.message}`
      });
    }
  }

}
