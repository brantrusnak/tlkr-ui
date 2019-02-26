import React from 'react'

interface CreatePostProps {
  text: string;
  onChange: Function;
  onSubmit: Function;
}

export default function CreatePostForm(props:CreatePostProps) {
  return (
    <div>
      <form onSubmit={event => props.onSubmit(event)} className="row">
        <div className="row">
          <div className="input-field col s12">
            <label htmlFor="text">Content</label>
            <textarea
              onChange={event => props.onChange(event)}
              id="text"
              value={props.text}
              className="materialize-textarea"
              autoComplete="off"
              required
            />
          </div>
          {/* //TODO: Close modal on valid post */}
          {/* //TODO: Update PostList on valid post */}
          <button
            className="btn btn-large waves-effect waves-light modal-close"
            type="submit"
            name="action"
          >
            Post
            <i className="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
  )
}
