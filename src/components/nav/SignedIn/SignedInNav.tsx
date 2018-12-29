import React from "react";
import SignedInNavOptions from "./SignedInNavOptions";
import AccountDropdown from "./AccountDropdown";
import SignedInSideNav from "./SignedInSideNav";

export default function SignedInNav() {
  return (
    <div>
      <ul className="left hide-on-med-and-down">
        <SignedInNavOptions />
      </ul>
      <AccountDropdown />
      <SignedInSideNav />
    </div>
  );
}
