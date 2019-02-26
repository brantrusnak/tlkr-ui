import React, { Component, ConsumerProps } from 'react';

interface AuthProviderState {
  isAuthenticated: boolean;
}

interface UpdateStateArg {
  key: keyof AuthProviderState;
  value: boolean;
}

interface AuthProviderStore {
  state: AuthProviderState;
  update: (arg: UpdateStateArg) => void;
}

const AuthContext = React.createContext({} as AuthProviderStore);

class AuthProvider extends Component<{}, AuthProviderState> {
  public readonly state = {
    isAuthenticated: false
  };
  
  private update = ({ key, value }: UpdateStateArg) => {
    this.setState({ [key]: value });
  };

  public render() {
    const store: AuthProviderStore = {
      state: this.state,
      update: this.update
    };

    return (
      <AuthContext.Provider value={store}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
