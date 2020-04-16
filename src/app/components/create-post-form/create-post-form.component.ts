import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'tlkr-create-post-form',
  templateUrl: './create-post-form.component.html',
  styleUrls: ['./create-post-form.component.scss']
})
export class CreatePostFormComponent implements OnInit {
  form = this.fb.group({
    content: ['', [Validators.required, Validators.minLength(1)]],
  });

  constructor(private fb: FormBuilder, private post: PostService, private modal: ModalService) { }

  onSubmit() {
    this.post.create(this.form.value.content, (success) => {
      if(success) {
        this.modal.hide();
        this.post.fetchTimeline();
      }
    });
  }

  ngOnInit(): void {
  }

}
