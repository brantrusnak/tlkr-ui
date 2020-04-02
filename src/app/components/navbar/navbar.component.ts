import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { SigninFormComponent } from '../signin-form/signin-form.component';
import { SignupFormComponent } from '../signup-form/signup-form.component';

@Component({
  selector: 'tlkr-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public modal: ModalService) { }

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
