import React, { Component } from "react";
import { Dropdown } from "materialize-css";
import { NavLink } from "react-router-dom";
import { NavProps } from "../Nav";

export default class AccountDropdown extends Component<NavProps> {

  componentDidMount() {
    let accountDropdownTrigger = document.querySelectorAll(".dropdown-trigger");
    Dropdown.init(accountDropdownTrigger, {
      alignment: "left",
      coverTrigger: false
    });
  }

  handleLogout = async () => {
    // TODO: Use HTTPUtil for this
    let logout = await fetch('http://localhost:5000/logout');
    
    if(logout.ok) {
      // Redirect
      this.props.onSignOut();
      this.props.history.push('/');
    }
    
  }

  render() {
    return (
      <div>
        <ul className="right">
          <li>
            <a
              className="dropdown-trigger"
              href="#extend"
              data-target="account_dropdown"
            >
              <i className="material-icons">more_vert</i>
            </a>
          </li>
        </ul>
        <ul id="account_dropdown" className="dropdown-content">
          <li><NavLink to={"/settings"}>Settings</NavLink></li>
          <li><NavLink onClick={this.handleLogout} to={"/"}>Sign Out</NavLink></li>
        </ul>
      </div>
    );
  }
}
