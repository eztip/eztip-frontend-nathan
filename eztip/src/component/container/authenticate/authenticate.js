import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { LoginView } from "../../views/LoginView";
import { HomeView } from "../../views/HomeView";

const authenticate = HomeView => LoginView => {
  return class extends Component {
    render() {
      return this.props.loggedIn ? <HomeView /> : <LoginView />;
    }
  };
};

authenticate.propTypes = {
  loggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  loggedIn: state.loginReducer.loggedIn
});

export default connect(
  mapStateToProps,
  {}
)(authenticate(HomeView)(LoginView));
