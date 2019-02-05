import React, { Component } from "react";

import { LoginForm } from "../../presentational/LoginForm";

class LoginView extends Component {
  render() {
    return (
      <div>
        <LoginForm match={this.props.match} history={this.props.history} />
      </div>
    );
  }
}

export default LoginView;
