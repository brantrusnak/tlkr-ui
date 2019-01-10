import React from "react";
import { NavLink } from "react-router-dom";

export default function SignedInNavOptions() {
  return (
    <div>
      <li><NavLink to={"/"}>Home</NavLink></li>
      <li><NavLink to={"/notifications"}>Notifications<span className="new badge blue">1</span></NavLink></li>
      <li><NavLink to={"/favorites"}>Favorites</NavLink></li>
    </div>
  );
}
