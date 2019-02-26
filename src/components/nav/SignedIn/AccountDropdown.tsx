import React, { Component } from 'react';
import { Dropdown } from 'materialize-css';
import { NavLink, RouteComponentProps } from 'react-router-dom';
import WithAuthContext from '../../auth/WithAuthContext';
import { AuthProviderStore } from '../../auth/AuthProvider';
import HTTPUtil from '../../util/HTTPUtil';

class AccountDropdown extends Component<AuthProviderStore> {
  constructor(props: AuthProviderStore) {
    super(props);
  }

  componentDidMount() {
    let accountDropdownTrigger = document.querySelectorAll('.dropdown-trigger');
    Dropdown.init(accountDropdownTrigger, {
      alignment: 'left',
      coverTrigger: false
    });
  }

  handleLogout = async () => {
    let http = new HTTPUtil();
    let logout = await http.GET('http://localhost:5000/logout');

    if (logout.ok) {
      // When setting Auth Context to false, ProtectedRoute redirects
      this.props.update({ key: 'isAuthenticated', value: false });
    }
  };

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
            <NavLink to={'/settings'}>Settings</NavLink>
          </li>
          <li>
            <NavLink onClick={this.handleLogout} to={'/'}>
              Sign Out
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default WithAuthContext(AccountDropdown);
