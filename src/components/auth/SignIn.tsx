import React, { Component } from 'react'
import {updateTextFields} from 'materialize-css';

export default class SignIn extends Component {
  componentDidMount() {
    updateTextFields();
  }
  render() {
    return (
      <div className="container">
        <div className="card hoverable">
          <div className="row">
            <form className="col s12">
              <div className="row">

                <div className="input-field col s12">
                  <i className="material-icons prefix">account_circle</i>
                  <input id="username" type="text" className="validate" />
                  <label htmlFor="username">Username</label>
                </div>

                <div className="input-field col s12">
                  <i className="material-icons prefix">account_circle</i>
                  <input id="password" type="text" className="validate" />
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