import React, { Component } from "react";
import { Route } from "react-router-dom";

import { LoginForm } from "../../presentational/LoginForm";

class LoginView extends Component {
  componentDidMount() {
    this.props.history.push("/login");
  }
  render() {
    return (
      <div>
        <Route path="/login" render={props => <LoginForm {...props} />} />
      </div>
    );
  }
}

export default LoginView;
