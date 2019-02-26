import React, { useEffect } from 'react';
import { updateTextFields } from 'materialize-css';

interface SettingsProps {
  details: {
    displayName: string;
    description: string;
    location: string;
  };
  onChange: Function;
  onSubmit: Function;
}

export default function SettingsForm(props: SettingsProps) {
  useEffect(() => {
    // Form does not update input fields if filled
    updateTextFields();
  });

  return (
    <div className="container">
      <h2>Settings</h2>
      <form onSubmit={event => props.onSubmit(event)} className="row">
        <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">account_circle</i>
            <label htmlFor="displayName">Display Name</label>
            <input
              onChange={event => props.onChange(event)}
              id="displayName"
              type="text"
              value={props.details.displayName}
              className="validate"
              autoComplete="off"
              required
            />
          </div>

          <div className="input-field col s12">
            <i className="material-icons prefix">lock</i>
            <label htmlFor="description">Description</label>
            <input
              onChange={event => props.onChange(event)}
              id="description"
              type="text"
              value={props.details.description}
              className="validate"
              autoComplete="off"
              required
            />
          </div>

          <div className="input-field col s12">
            <i className="material-icons prefix">lock</i>
            <label htmlFor="location">Location</label>
            <input
              onChange={event => props.onChange(event)}
              id="location"
              type="text"
              value={props.details.location}
              className="validate"
              autoComplete="off"
              required
            />
          </div>

          <button
            className="btn btn-large waves-effect waves-light"
            type="submit"
            name="action"
          >
            Update
            <i className="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
  );
}
