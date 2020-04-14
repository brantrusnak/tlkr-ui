import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'tlkr-user-update-form',
  templateUrl: './user-update-form.component.html',
  styleUrls: ['./user-update-form.component.scss']
})
export class UserUpdateFormComponent implements OnInit, OnDestroy {
  userSubscription: Subscription;
  form = this.fb.group({
    displayName: ['', [Validators.required]],
    description: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private modal: ModalService, private user: UserService) { }

  onSubmit() {
    this.user.update(this.form.value, () => {
      this.modal.hide();
    });
  }

  ngOnInit(): void {
    this.userSubscription = this.user.user.subscribe(user => {
      this.form.patchValue({
        displayName: user.displayName,
        description: user.description
      });
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
