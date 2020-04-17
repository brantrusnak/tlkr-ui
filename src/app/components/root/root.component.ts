import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'tlkr-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  @ViewChild('outlet', { static: true }) outlet;
  showNav = true;
  showSidebar = false;
  routerListener: Subscription;

  constructor(private router: Router) { }

  checkNavbar() {
    this.showNav = typeof this.outlet.activatedRouteData.showNav !== 'undefined' ? this.outlet.activatedRouteData.showNav : true;
  }
  
  checkSidebar() {
    this.showSidebar = typeof this.outlet.activatedRouteData.showSidebar !== 'undefined' ? this.outlet.activatedRouteData.showSidebar : false;
	}

  ngOnInit(): void {
		this.routerListener = this.router.events
			.pipe(filter(event => event instanceof NavigationEnd))
			.subscribe(response => {
        this.checkNavbar();
        this.checkSidebar();
      });
  }

  ngOnDestroy(): void {
    this.routerListener.unsubscribe();
  }

}
