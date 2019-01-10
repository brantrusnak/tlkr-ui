import React from "react";
import SignedInNavOptions from "./SignedInNavOptions";
import AccountDropdown from "./AccountDropdown";
import SignedInSideNav from "./SignedInSideNav";
import { NavProps } from "../Nav";

export default function SignedInNav(props:NavProps) {
  return (
    <div>
      <ul className="left hide-on-med-and-down">
        <SignedInNavOptions />
      </ul>
      <AccountDropdown {...props} />
      <SignedInSideNav />
    </div>
  );
}
