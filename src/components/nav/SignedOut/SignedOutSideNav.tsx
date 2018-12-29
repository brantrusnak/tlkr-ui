import React, { Component } from "react";
import { Sidenav } from "materialize-css";
import SignedOutNavOptions from './SignedOutNavOptions';

export default class SignedOutSideNav extends Component {
  componentDidMount() {
    let sidenavTrigger = document.querySelectorAll(".sidenav");
    Sidenav.init(sidenavTrigger);
  }
  render() {
    return (
      <ul className="sidenav" id="mobile-nav">
        <SignedOutNavOptions />
      </ul>
    );
  }
}
