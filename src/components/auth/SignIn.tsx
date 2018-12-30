import React, { Component, FormEvent, FormEventHandler } from 'react'
import {updateTextFields} from 'materialize-css';

export default class SignIn extends Component {
  state = {
    username: '',
    password: ''
  }
  handleChange: FormEventHandler;
  handleSubmit: FormEventHandler;

  constructor(props: any) {
    super(props)
    
    this.handleChange = (event: FormEvent<HTMLInputElement>) => {
      this.setState({
        [event.currentTarget.id]: event.currentTarget.value
      });
    }

    this.handleSubmit = (event: FormEvent) => {
      event.preventDefault();
      console.log(event.currentTarget);
    }
    
  }

  componentDidMount() {
    updateTextFields();
  }

  render() {
    return (
      <div className="container">
        <div className="card hoverable">
          <div className="row">
            <form onSubmit={this.handleSubmit} className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">account_circle</i>
                  <label htmlFor="username">Username</label>
                  <input onChange={this.handleChange} id="username" type="text" className="validate" />
                </div>
                <div className="input-field col s12">
                  <i className="material-icons prefix">account_circle</i>
                  <input onChange={this.handleChange} id="password" type="password" className="validate" />
                  <label htmlFor="password">Password</label>
                </div>
                <button className="btn btn-large waves-effect waves-light" type="submit" name="action">Submit
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}