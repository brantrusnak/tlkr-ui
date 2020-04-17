import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { CreatePostFormComponent } from '../create-post-form/create-post-form.component';

@Component({
  selector: 'tlkr-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  constructor(private modal: ModalService) { }

  public loadModal(): void {
    this.modal.loadComponent(CreatePostFormComponent);
    this.modal.heading = 'Create post';
    this.modal.show();
  }

  ngOnInit(): void {
  }

}
