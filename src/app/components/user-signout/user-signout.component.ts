import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { DropdownOption } from 'src/app/models/dropdown-option';
import { AuthService } from 'src/app/services/auth.service';
import { UserUpdateFormComponent } from '../user-update-form/user-update-form.component';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'tlkr-user-signout',
  templateUrl: './user-signout.component.html',
  styleUrls: ['./user-signout.component.scss']
})
export class UserSignoutComponent implements OnInit {
  public dropdownOptions: DropdownOption[] = [
    {
      label: 'Settings',
      callback: () => {
        this.modal.loadComponent(UserUpdateFormComponent);
        this.modal.heading = 'Update info';
        this.modal.show();
      }
    },
    {
      label: 'Logout',
      callback: async () => {
        await this.user.signout();
        this.router.navigate(['/']);
      }
    }
  ]

  constructor(public user: UserService, private router: Router, private modal: ModalService) { }

  ngOnInit(): void {
  }

}
