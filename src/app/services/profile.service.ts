import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpService } from './http.service';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private $profile = new BehaviorSubject<User>(null);
  private $posts = new BehaviorSubject<Post[]>([]);

  public profile = this.$profile.asObservable();
  public posts = this.$posts.asObservable();

  constructor(private http: HttpService, private config: ConfigService) { }

  public async getPostsByUsername(username: string) {
    let response = await this.http.get(`${this.config.post}s/username/${username}`).toPromise<{posts: Post[]}>();
    this.$posts.next(response.posts);
  }

  public async getUserByUsername(username: string) {
    let response = await this.http.get(`${this.config.user}/username/${username}`).toPromise<User>();
    this.$profile.next(response);
  }

}
