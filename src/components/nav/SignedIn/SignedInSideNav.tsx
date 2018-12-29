import React, { Component } from "react";
import { Sidenav } from "materialize-css";
import SignedInNavOptions from './SignedInNavOptions';

export default class SignedInSideNav extends Component {
  componentDidMount() {
    let sidenavTrigger = document.querySelectorAll(".sidenav");
    Sidenav.init(sidenavTrigger);
  }
  render() {
    return (
      <ul className="sidenav" id="mobile-nav">
        <SignedInNavOptions />
      </ul>
    );
  }
}
