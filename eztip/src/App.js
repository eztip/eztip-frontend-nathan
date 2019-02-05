import React, { Component } from "react";
import "./App.css";
import { Route, withRouter } from "react-router-dom";

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

export default withRouter(App);
