import React, { Component } from 'react';
import HTTPUtil from '../util/HTTPUtil';
import PostList from './PostList';

export default class Favorites extends Component {
  async componentWillMount() {
    let http = new HTTPUtil();
    let feed = await http.GET('http://localhost:5000/favorites');
    if (feed.ok) {
      let posts = await feed.json() as {id:number; text: string}[];
      this.setState(posts);
    }
  }

  state = {
    posts: []
  };

  render() {
    return <div className="container">
      <div className="fixed-action-btn">
        <a data-target="modal1" className="btn-floating btn-large red modal-trigger">
          <i className="large material-icons">mode_edit</i>
        </a>
      </div>
      {this.state.posts.length !== 0 ? <PostList posts={this.state.posts} /> : <div>No Posts!</div>}
    </div>
  }
}
