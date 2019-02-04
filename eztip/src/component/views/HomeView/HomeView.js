import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { EmployeeView } from "../EmployeeView";
import { GuestView } from "../GuestView";
import { connect } from "react-redux";

const HomeView = props => {
  return (
    <div className="home__container">
      <Route exact path="/" render={props => <EmployeeView {...props} />} />
      <Route path="/guest" render={props => <GuestView {...props} />} />
    </div>
  );
};

HomeView.propTypes = {};

export default connect(
  null,
  {}
)(HomeView);
