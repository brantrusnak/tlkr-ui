import React, { Component, FormEvent } from 'react';
import CreatePostForm from './CreatePostForm';
import HTTPUtil from '../util/HTTPUtil';

export default class CreatePost extends Component {
  state = {
    text: ''
  };

  handleChange = (event: FormEvent<HTMLTextAreaElement>) => {
    this.setState({ [event.currentTarget.id]: event.currentTarget.value });
  };

  handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    let http = new HTTPUtil();
    let post = await http.POST(
      'http://localhost:5000/post',
      JSON.stringify(this.state)
    );

    if(post.ok){
      let status = await post.json();
      console.log(status);
    }

  };

  render() {
    return (
      <div>
        <h3>Create Post</h3>
        <CreatePostForm text={this.state.text} onChange={this.handleChange} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
