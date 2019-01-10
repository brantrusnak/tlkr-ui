import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/nav/Nav';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Feed from './components/feed/Feed';
import Notifications from './components/feed/Notifications';
import Favorites from './components/feed/Favorites';
import Settings from './components/settings/Settings';

const Homepage = () => <h2>Homepage</h2>;

export default class App extends Component {
  state = {
    isAuthenticated: false
  };

  handleSignIn = () => {
    this.setState({ isAuthenticated: true });
  };

  handleSignOut = () => {
    this.setState({ isAuthenticated: false });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav isAuthenticated={this.state.isAuthenticated} onSignOut={this.handleSignOut} />
          <Switch>
            {
              this.state.isAuthenticated ? 
                <React.Fragment>
                  <Route path="/" exact component={Feed} />
                  <Route path="/notifications" component={Notifications} />
                  <Route path="/favorites" component={Favorites} />
                  <Route path="/settings" component={Settings} />
                </React.Fragment>
              : 
                <React.Fragment>
                  <Route path="/" exact component={Homepage} />
                  <Route path="/signin" render={props => ( <SignIn {...props} onSignIn={this.handleSignIn} /> )} />
                  <Route path="/signup" component={SignUp} />
                </React.Fragment>
            }
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
