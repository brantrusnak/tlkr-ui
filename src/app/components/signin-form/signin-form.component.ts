import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'tlkr-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss']
})
export class SigninFormComponent implements OnInit {
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  });

  constructor(private fb: FormBuilder, private modal: ModalService, private router: Router, private user: UserService) { }

  onSubmit() {
    this.user.signin(this.form.value, success => {
      if (success) {
        this.modal.hide();
        this.router.navigate(['loading'], { queryParams: { next: 'feed' } });
      }
    });
  }

  ngOnInit(): void {
  }

}
