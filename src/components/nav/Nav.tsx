import React, { Component } from "react";
import SignedInNav from "./SignedIn/SignedInNav";
import SignedOutNav from "./SignedOut/SignedOutNav";
import { NavLink, RouteComponentProps, withRouter } from "react-router-dom";

export interface NavProps extends RouteComponentProps<any> {
  isAuthenticated: boolean;
  onSignOut: Function;
}

class Nav extends Component<NavProps> {
  render() {
    return (
      <div>
        <nav className="nav-extended">
          <div className="nav-wrapper">
            <NavLink className="brand-logo center hide-on-med-and-down" to={"/"}><i className="material-icons">cloud</i>Tlkr</NavLink>
            <a href="#" data-target="mobile-nav" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            {this.props.isAuthenticated ? <SignedInNav {...this.props} /> : <SignedOutNav />}
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Nav);