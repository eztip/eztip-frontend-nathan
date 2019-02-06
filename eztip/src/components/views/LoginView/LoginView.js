import React, { Component } from "react";
import PropTypes from "prop-types";

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

LoginView.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default LoginView;
