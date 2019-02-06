import React, { Component } from "react";
import "./App.css";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { authenticate } from "./component/container/authenticate";
import { NavigationContainer } from "./component/presentational/Navigation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationContainer
          match={this.props.match}
          history={this.props.history}
        />
        <DisplayedComponent
          match={this.props.match}
          history={this.props.history}
        />
      </div>
    );
  }
}

App.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

const DisplayedComponent = authenticate;

export default withRouter(App);
