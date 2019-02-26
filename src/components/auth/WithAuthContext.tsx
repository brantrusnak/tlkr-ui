import React from 'react';
import { AuthConsumer } from './AuthProvider';

export default function WithAuthContext(
  WrappedComponent: React.ComponentType<any>
): React.ComponentClass<any> {
  return class extends React.Component<any> {
    render() {
      return (
        <AuthConsumer>
          {auth => <WrappedComponent {...this.props} update={auth.update} />}
        </AuthConsumer>
      );
    }
  };
}
