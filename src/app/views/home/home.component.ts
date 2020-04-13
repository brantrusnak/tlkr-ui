import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'tlkr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userSubscription: Subscription;

  constructor(public user: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userSubscription = this.user.user.subscribe(user => user ? this.router.navigate(['loading'], {queryParams: { next: 'feed' }}) : false);
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
