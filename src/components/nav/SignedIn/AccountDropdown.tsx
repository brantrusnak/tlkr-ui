import React, { Component } from "react";
import { Dropdown } from "materialize-css";

export default class AccountDropdown extends Component {
  componentDidMount() {
    let accountDropdownTrigger = document.querySelectorAll(".dropdown-trigger");
    Dropdown.init(accountDropdownTrigger, {
      alignment: "left",
      coverTrigger: false
    });
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
          <li>
            <a href="#!">Settings</a>
          </li>
          <li>
            <a href="#!">Sign Out</a>
          </li>
        </ul>
      </div>
    );
  }
}
