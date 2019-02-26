import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthConsumer } from './AuthProvider';

export default function ProtectedRoute(props: any) {
  return (
    <AuthConsumer>
      {auth =>
        auth.state.isAuthenticated ? (
          <Route {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    </AuthConsumer>
  );
}
