import React, { Component } from "react";
import { Route } from "react-router-dom";
import { EmployeeView } from "../EmployeeView";
import { GuestView } from "../GuestView";
import { connect } from "react-redux";
import { getUserByID } from "../../../store/actions/index";

class HomeView extends Component {
  getEmployee = id => {
    this.props.getUserByID(id);
  };

  componentDidMount() {
    this.getEmployee(2);
  }

  render() {
    return (
      <div className="home__container">
        <Route
          exact
          path="/"
          render={props => (
            <EmployeeView {...props} employee={this.props.employee} />
          )}
        />
        <Route exact path="/guest" render={props => <GuestView {...props} />} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  employee: state.userReducer.employee
});

const mapActionsToProps = {
  getUserByID
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(HomeView);
