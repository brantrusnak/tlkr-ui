import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'tlkr-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  paramSubscription: Subscription;

  constructor(private route: ActivatedRoute, public profile: ProfileService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.profile.getUserByUsername(params.username);
      this.profile.getPostsByUsername(params.username);
    });
  }

}
