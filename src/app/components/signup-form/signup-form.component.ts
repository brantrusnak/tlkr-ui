import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'tlkr-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  requesting = false;
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    displayName: ['', Validators.required],
    description: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, public user: UserService, private modal: ModalService) { }

  async onSubmit() {
    this.requesting = true;
    await this.user.signup(this.form.value, success => {
      this.requesting = false;
      if(success) {
        this.modal.hide();
      }
    });
  }

  ngOnInit(): void {
  }

}
