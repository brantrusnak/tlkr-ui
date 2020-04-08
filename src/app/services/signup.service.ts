import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';
import { SignupInfo } from '../models/signup';

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

  constructor(private auth: AuthService) { }

  public async request(info: SignupInfo, callback?: (success: boolean) => void) {
    // Style button to "loading" for requesting.
    // Issue notification (need service/components system) after... or do callback to let form handle response however it wants?
    // Notification system would be -> notificationService.sendInline('where', 'status', 'message') -> notificationService.sendInline('signup', 'success', 'Success! You may now log in!')
    // continue: Would have a component <tlkr-inline-notification location="signup"></tlkr-inline-notification>
    this.$requesting.next(true);
    this.$error.next(false);
    this.$success.next(false);

    try {
      // let response = await this.auth.register(info).toPromise();
      // console.log(response);
      setTimeout(() => {
        this.$error.next(false);
        this.$success.next(true);
        this.$requesting.next(false);
        if (callback) {
          callback(true);
        }
      }, 5000);
    } catch (error) {
      console.log('ERROR');
      this.$error.next(true);
      this.$success.next(false);
      this.$requesting.next(false);
      if (callback) {
        callback(false);
      }
    }

  }

}
