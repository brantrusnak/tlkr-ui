import { Injectable } from '@angular/core';
import { Alert } from '../models/alert';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private $global = new BehaviorSubject<Alert[]>([]);
  public global = this.$global.asObservable();
  private $inline = new BehaviorSubject<Alert[]>([]);
  public inline = this.$inline.asObservable();

  constructor() { }

  createAlerts() {
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

  public create(alert: Alert) {
    if(alert.type === 'global') {
      this.$global.next([...this.$global.value, alert])
    } else {
      this.$inline.next([...this.$inline.value, alert])
    }
    this.timeRemove(alert);
  }

  private timeRemove(alert: Alert) {
    // Maybe this should be set from a component?
    // Have a alert component -> OnInit -> Register for removal (in component). Click on alert component fires it instantly. Hover pauses timeout. Send it here after timeout.
    setTimeout(() => {
      let copy = alert.type === 'global' ? this.$global.value : this.$inline.value;
      copy.shift();
      alert.type === 'global' ? this.$global.next(copy) : this.$inline.next(copy);
    }, 5000)
  }

}
