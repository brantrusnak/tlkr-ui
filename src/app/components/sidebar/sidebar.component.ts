import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { UserUpdateFormComponent } from '../user-update-form/user-update-form.component';
import { ModalService } from 'src/app/services/modal.service';
import { DrawerComponent } from '../drawer/drawer.component';

@Component({
  selector: 'tlkr-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() drawer: DrawerComponent;
  constructor(public user: UserService, private router: Router, private modal: ModalService) { }

  closeDrawer() {
    if(this.drawer) {
      this.drawer.close();
    }
  }

  loadSettings() {
    this.modal.loadComponent(UserUpdateFormComponent);
    this.modal.heading = 'Update info';
    this.modal.show();
  }

  async signout() {
    await this.user.signout();
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
