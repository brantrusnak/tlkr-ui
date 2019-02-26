import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sidenav } from "materialize-css";

export default function SignedInNavOptions() {
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
        <NavLink onClick={handleClick} to={'/feed'}>
          Feed
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleClick} to={'/notifications'}>
          Notifications<span className="new badge blue">1</span>
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleClick} to={'/favorites'}>
          Favorites
        </NavLink>
      </li>
    </div>
  );
}
