import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'tlkr-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    displayName: ['', Validators.required],
    description: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, public signup: SignupService) { }

  onSubmit() {
    this.signup.request(this.form.value);
  }

  ngOnInit(): void {
  }

}
