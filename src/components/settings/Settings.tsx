import React, { Component } from 'react'
import HTTPUtil from '../util/HTTPUtil';

export default class Settings extends Component {

  async componentWillMount() {
    
    let http = new HTTPUtil();
    let user = await http.GET('http://localhost:5000/user');

    if(user.ok) {
      let data = await user.json();
      console.log(data);
    }

  }

  render() {
    return (
      <div>
        Settings
      </div>
    )
  }
}
