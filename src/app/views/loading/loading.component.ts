import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'tlkr-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  paramSubscription: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.paramSubscription = this.route.queryParams.subscribe(params => {
      setTimeout(() => {
        this.router.navigate([params.next])
      }, 3000)
    })
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }

}
