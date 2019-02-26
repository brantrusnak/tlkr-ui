import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/nav/Nav';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Feed from './components/feed/Feed';
import Notifications from './components/feed/Notifications';
import Favorites from './components/feed/Favorites';
import Settings from './components/settings/Settings';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { AuthProvider } from './components/auth/AuthProvider';

const Homepage = () => <h2>Homepage</h2>;

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <AuthProvider>
            <Nav />
            <Switch>
              <ProtectedRoute path="/feed" component={Feed} />
              <ProtectedRoute path="/notifications" component={Notifications} />
              <ProtectedRoute path="/favorites" component={Favorites} />
              <ProtectedRoute path="/settings" component={Settings} />
              <Route path="/" exact component={Homepage} />
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
            </Switch>
          </AuthProvider>
        </div>
      </BrowserRouter>
    );
  }
}
