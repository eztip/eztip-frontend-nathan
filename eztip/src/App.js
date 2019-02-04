import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import { authenticate } from "./component/container/authenticate";

class App extends Component {
  render() {
    return (
      <div className="App">
        <DisplayedComponent />
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
