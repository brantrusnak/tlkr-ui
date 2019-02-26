import React, { Component } from 'react';
import HTTPUtil from '../util/HTTPUtil';
import M from 'materialize-css';
import CreatePost from './CreatePost';
import PostList from './PostList';

export default class Feed extends Component {
  async componentWillMount() {
    let http = new HTTPUtil();
    let feed = await http.GET('http://localhost:5000/posts');
    if (feed.ok) {
      let posts = await feed.json() as {id:number; text: string}[];
      this.setState(posts);
    }

    let floatingBtn = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(floatingBtn, {hoverEnabled: false});
  }

  componentDidMount() {
    let floatingBtn = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(floatingBtn, {hoverEnabled: false});

    let modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);
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

      <div id="modal1" className="modal">
        <div className="modal-content">
          <CreatePost />
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
        </div>
      </div>

    </div>
  }
}
