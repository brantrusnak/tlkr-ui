import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SigninService } from 'src/app/services/signin.service';
import { ModalService } from 'src/app/services/modal.service';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private signin: SigninService, private modal: ModalService, private router: Router) { }

  onSubmit() {
    this.signin.request(this.form.value, success => {
      if(success) {
        this.modal.hide();
        this.router.navigate(['loading'], {queryParams: { next: 'feed' }})
      }
    });
  }

  ngOnInit(): void {
  }

}
