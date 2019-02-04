import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";

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

export default App;
