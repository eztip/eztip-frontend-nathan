import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { LoginView } from "../../views/LoginView";
import { HomeView } from "../../views/HomeView";

const authenticate = HomeView => LoginView => {
  return class extends Component {
    static propTypes = {
      prop: PropTypes
    };

    render() {
      return this.props.loggedIn ? <HomeView /> : <LoginView />;
    }
  };
};

const mapStateToProps = state => {
  return {
    state: state.loginReducer.loggedIn
  };
};

export default authenticate(HomeView)(LoginView);
