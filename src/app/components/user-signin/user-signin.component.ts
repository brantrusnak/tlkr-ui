import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ModalService } from 'src/app/services/modal.service';
import { SigninFormComponent } from '../signin-form/signin-form.component';
import { SignupFormComponent } from '../signup-form/signup-form.component';

@Component({
  selector: 'tlkr-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.scss']
})
export class UserSigninComponent implements OnInit {

  constructor(public modal: ModalService, public user: UserService) { }

  public loadSignin() {
    this.modal.loadComponent(SigninFormComponent);
    this.modal.heading = 'Sign in';
  }

  public loadSignup() {
    this.modal.loadComponent(SignupFormComponent);
    this.modal.heading = 'Sign up';
  }

  ngOnInit(): void {
  }

}
