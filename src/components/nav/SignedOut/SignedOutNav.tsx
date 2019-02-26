import React from 'react';
import SignedOutNavOptions from './SignedOutNavOptions';
import SignedOutSideNav from './SignedOutSideNav';

export default function SignedOutNav() {
  return (
    <div>
      <ul className="left hide-on-med-and-down">
        <SignedOutNavOptions />
      </ul>
      <SignedOutSideNav />
    </div>
  );
}
