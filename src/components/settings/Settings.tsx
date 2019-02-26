import React, { Component, FormEvent } from 'react';
import HTTPUtil from '../util/HTTPUtil';
import SettingsForm from './SettingsForm';
import { Toast } from 'materialize-css';

interface SettingsProps {
  details: {
    displayName: string;
    description: string;
    location: string;
  };
  onChange: Function;
  onSubmit: Function;
}

export default class Settings extends Component<SettingsProps> {
  state = {
    displayName: '',
    description: '',
    location: ''
  };

  async componentWillMount() {
    let http = new HTTPUtil();
    let user = await http.GET('http://localhost:5000/user');
    if (user.ok) {
      let data = await user.json();
      this.setState({
        displayName: data.response.displayName,
        description: data.response.description,
        location: data.response.location
      });
    }
  }

  handleChange = (event: FormEvent<HTMLInputElement>) => {
    this.setState({
      [event.currentTarget.id]: event.currentTarget.value
    });
  };

  handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let http = new HTTPUtil();
    let request = await http.PUT(
      'http://localhost:5000/user',
      JSON.stringify(this.state)
    );
    let details = await request.json();
    if (request.ok) {
      new Toast({ html: details.message, classes: 'green' });
    } else {
      new Toast({ html: details.message, classes: 'red' });
    }
  };

  render() {
    return (
      <div>
        <SettingsForm
          details={this.state}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
