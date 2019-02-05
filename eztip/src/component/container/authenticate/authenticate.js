import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { LoginView } from "../../views/LoginView";
import { HomeView } from "../../views/HomeView";

const authenticate = HomeView => LoginView => {
  return class extends Component {
    render() {
      return this.props.loggedIn ? (
        <Route path="/" render={props => <HomeView {...props} />} />
      ) : (
        <Route path="/" render={props => <LoginView {...props} />} />
      );
    }
  };
};

authenticate.propTypes = {
  loggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  loggedIn: state.userReducer.loggedIn
});

export default connect(
  mapStateToProps,
  {}
)(authenticate(HomeView)(LoginView));
