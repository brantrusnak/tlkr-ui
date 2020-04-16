import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ConfigService } from './config.service';
import { AlertService } from './alert.service';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private $timeline = new BehaviorSubject<Post[]>(null);
  private $favorites = new BehaviorSubject<Post[]>(null);
  public timeline = this.$timeline.asObservable();
  public favorites = this.$favorites.asObservable();

  constructor(private http: HttpService, private config: ConfigService, private alert: AlertService) { }

  public async fetchFavorites() {
    let favorites = await this.http.get(`${this.config.favorite}s`).toPromise<{posts: Post[]}>();
    this.$favorites.next(favorites.posts);
  }

  public async fetchTimeline() {
    let timeline = await this.http.get(this.config.timeline).toPromise<{posts: Post[]}>();
    this.$timeline.next(timeline.posts); // Do we need to do fetch here? Maybe just increment by one visually and send on backend?
  }

  public async favorite(postId: number) {
    await this.http.post(`${this.config.favorite}/${postId}`, null).toPromise();
    this.fetchTimeline(); // Do we need to do fetch here? Maybe just decrement by one visually and send on backend?
  }

  public async unfavorite(postId: number) {
    await this.http.post(`${this.config.unfavorite}/${postId}`, null).toPromise();
    this.fetchTimeline();
  }

  public async delete(postId: number, callback?: (success: boolean) => void) {
    try {
      await this.http.delete(`${this.config.post}/${postId}`).toPromise();
      this.alert.create({
        style: 'success',
        type: 'global',
        message: 'Post deleted!'
      })
      if(callback){
        callback(true);
      }
    } catch (error) {
      this.alert.create({
        style: 'danger',
        type: 'global',
        message: 'Failed to delete post'
      })
      if(callback){
        callback(false);
      }
    }
  }

  public async create(text: string, callback?: (success: boolean) => void) {
    try {
      await this.http.post(this.config.post, {text}).toPromise();
      this.alert.create({
        style: 'success',
        type: 'global',
        message: 'Post created successfully!'
      })
      if(callback){
        callback(true);
      }
    } catch (error) {
      this.alert.create({
        style: 'danger',
        type: 'global',
        message: 'Failed to create post'
      })
      if(callback){
        callback(false);
      }
    }
  }

}
