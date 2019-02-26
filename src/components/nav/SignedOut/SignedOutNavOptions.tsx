import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sidenav } from 'materialize-css';

export default function SignedOutNavOptions() {
  function handleClick(event: any) {
    let sidenavTrigger = document.querySelector('.sidenav') as Element;
    let instance = Sidenav.getInstance(sidenavTrigger);
    if (instance.isOpen) {
      instance.close();
    }
  }
  return (
    <div>
      <li>
        <NavLink onClick={handleClick} to={'/'}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleClick} to={'/signin'}>
          Sign In
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleClick} to={'/signup'}>
          Sign Up
        </NavLink>
      </li>
    </div>
  );
}
