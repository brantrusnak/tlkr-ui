import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'tlkr-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  signupForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    displayName: ['', Validators.required],
    description: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.log('submit');
    console.log(this.signupForm.value);
  }

  ngOnInit(): void {
  }

}
