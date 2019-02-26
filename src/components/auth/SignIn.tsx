import React, { Component, FormEvent, createRef } from 'react';
import { Toast } from 'materialize-css';
import { withRouter, RouteComponentProps } from 'react-router';
import HTTPUtil from '../util/HTTPUtil';
import { AuthConsumer } from './AuthProvider';
import { connect } from 'react-redux';

const withUserContext = (Component: any) => {
  return (props?: any) => {
      // <Component {...props} />
    // <AuthConsumer>
    //   {
    //     auth => {
    //     }

    //   }
    // </AuthConsumer>
    // <AuthProvider>
      // <AuthConsumer>
        // {auth => <Component {...props} update={auth.update} /> }
      // </AuthConsumer>
    // </AuthProvider>
  }
}

class SignIn extends Component<RouteComponentProps> {
  
  constructor(props: RouteComponentProps) {
    super(props);
  }

  private formRef = createRef<HTMLFormElement>();

  state = {
    username: '',
    password: ''
  };

  handleChange = (event: FormEvent<HTMLInputElement>) => {
    this.setState({ [event.currentTarget.id]: event.currentTarget.value });
  };

  handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let http = new HTTPUtil();
    let login = await http.POST(
      'http://localhost:5000/login',
      JSON.stringify(this.state)
    );

    let data = await login.json();
    let authHeader = login.headers.get('Authorization');

    //TODO: Shouldnt put this in localStorage
    localStorage.setItem('auth', authHeader || '');

    if (login.ok) {
      let form = this.formRef.current as HTMLFormElement;
      new Toast({ html: data.message, classes: 'green' });

      // Resetting only the state doesn't reset input styles
      this.setState({ username: '', password: '' });
      form.reset();

      // TODO: Set State Here
      // this.props.update({key: 'isAuthenticated', value: true})

      // Redirect here
      this.props.history.push('/feed');
    } else {
      new Toast({ html: data.message, classes: 'red' });
    }
  };

  render() {
    return (
      <div className="container">
        <h2>Sign In</h2>
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

// connect(withUserContext,withRouter)
export default withRouter(SignIn);