import React, { Component, FormEvent, createRef } from 'react';
import { Toast } from 'materialize-css';

export default class SignUp extends Component {
  private formRef = createRef<HTMLFormElement>();

  state = {
    username: '',
    password: '',
    email: '',
    displayName: ''
  };

  handleChange = (event: FormEvent<HTMLInputElement>) => {
    this.setState({
      [event.currentTarget.id]: event.currentTarget.value
    });
  };

  handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //TODO: Use HTTPUtil for this
    let signup = await fetch('http://localhost:5000/register', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(this.state)
    });

    let data = await signup.json();

    if (signup.ok) {
      let form = this.formRef.current as HTMLFormElement;
      new Toast({ html: data.message, classes: 'green' });

      // Resetting only the state doesn't reset input styles
      this.setState({username: '', password: '', email: '', displayName: ''});
      form.reset();

      // Should we sign them in or redirect them to /signin?
      
    } else {
      new Toast({ html: data.message, classes: 'red' });
    }
  };

  render() {
    return (
      <div className="container">
        <h2>Sign Up</h2>
        <form ref={this.formRef} onSubmit={this.handleSubmit} className="row">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">account_circle</i>
              <label htmlFor="username">Username</label>
              <input
                onChange={this.handleChange}
                id="username"
                type="text"
                value={this.state.username}
                className="validate"
                autoComplete="off"
                required
              />
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">lock</i>
              <input
                onChange={this.handleChange}
                id="password"
                type="password"
                value={this.state.password}
                className="validate"
                autoComplete="off"
                required
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input
                onChange={this.handleChange}
                id="email"
                type="email"
                value={this.state.email}
                className="validate"
                autoComplete="off"
                required
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">contacts</i>
              <input
                onChange={this.handleChange}
                id="displayName"
                type="text"
                value={this.state.displayName}
                className="validate"
                autoComplete="off"
                required
              />
              <label htmlFor="displayName">Display Name</label>
            </div>
            <button
              className="btn btn-large waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
