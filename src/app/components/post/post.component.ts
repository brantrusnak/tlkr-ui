import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'tlkr-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() item: Post;

  constructor(private post: PostService) { }

  favorite() {
    this.post.favorite(this.item.id);
  }

  unfavorite() {
    this.post.favorite(this.item.id);
  }

  toggleFavorite() {
    console.warn('Implement this!')
    // Need to figure this out.
  }

  ngOnInit(): void {
  }

}
