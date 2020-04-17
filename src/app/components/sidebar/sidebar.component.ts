import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { UserUpdateFormComponent } from '../user-update-form/user-update-form.component';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'tlkr-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public user: UserService, private router: Router, private modal: ModalService) { }

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
