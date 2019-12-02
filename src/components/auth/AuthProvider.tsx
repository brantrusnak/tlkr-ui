import React, { Component } from 'react';
import HTTPUtil from '../util/HTTPUtil';

interface AuthProviderState {
  isAuthenticated: boolean;
}

interface UpdateStateArg {
  key: keyof AuthProviderState;
  value: boolean;
}

export interface AuthProviderStore {
  state: AuthProviderState;
  update: (arg: UpdateStateArg) => void;
}

const AuthContext = React.createContext({} as AuthProviderStore);

class AuthProvider extends Component<{}, AuthProviderState> {

  async componentWillMount(){
    let http = new HTTPUtil();
    let user = await http.GET('http://localhost:5000/user')

    if(user.ok){
      this.update({key: 'isAuthenticated', value: true});
    } else {
      this.update({key: 'isAuthenticated', value: false});
    }
  }

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
