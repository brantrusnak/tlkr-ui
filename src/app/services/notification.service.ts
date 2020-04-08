import { Injectable } from '@angular/core';
import { Notification } from '../models/notification';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private $global = new BehaviorSubject<Notification[]>([]);
  public global = this.$global.asObservable();
  private $inline = new BehaviorSubject<Notification[]>([]);
  public inline = this.$inline.asObservable();

  constructor() { }

  createNotifications() {
    this.create({
      type: 'global',
      style: 'success',
      message: 'Success!'
    })

    setTimeout(() => {
      this.create({
        type: 'global',
        style: 'warning',
        message: 'Warning!'
      })
    }, 1000)

    setTimeout(() => {
      this.create({
        type: 'global',
        style: 'danger',
        message: 'Danger!'
      })
    }, 2000)

    setTimeout(() => {
      this.create({
        type: 'global',
        style: 'info',
        message: 'Info!'
      })
    }, 3000)

    setTimeout(() => {
      this.create({
        type: 'global',
        style: 'info',
        message: 'Closeable!'
      })
    }, 4000)

    setTimeout(() => {
      this.create({
        type: 'inline',
        style: 'info',
        message: 'You shouldn\'t see this!'
      })
    }, 5000)

  }

  public create(notification: Notification) {
    if(notification.type === 'global') {
      this.$global.next([...this.$global.value, notification])
    } else {
      this.$inline.next([...this.$inline.value, notification])
    }
    this.timeRemove(notification);
  }

  private timeRemove(notification: Notification) {
    // Maybe this should be set from a component?
    // Have a notification component -> OnInit -> Register for removal (in component). Click on notification component fires it instantly. Hover pauses timeout. Send it here after timeout.
    setTimeout(() => {
      let copy = notification.type === 'global' ? this.$global.value : this.$inline.value;
      copy.shift();
      notification.type === 'global' ? this.$global.next(copy) : this.$inline.next(copy);
    }, 5000)
  }

}
