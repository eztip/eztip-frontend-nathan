import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { Route } from "react-router-dom";

import { authenticate } from "./component/container/authenticate";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" render={props => <DisplayedComponent {...props} />} />
      </div>
    );
  }
}

const DisplayedComponent = authenticate;

const mapStateToProps = state => {
  return {
    state: state.loginReducer.loggedIn
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);
