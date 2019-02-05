import React, { Component } from "react";
import { Route } from "react-router-dom";
import { EmployeeView } from "../EmployeeView";
import { GuestView } from "../GuestView";
import { connect } from "react-redux";
import { getUserByID, getUsers } from "../../../store/actions/index";

class HomeView extends Component {
  componentDidMount() {
    this.props.getUsers();
    //
    // this.props.isAUser
    //   ? this.props.history.push(`/employee/`)
    //   : this.props.history.push("/guest");
    // console.log("Employee", this.props.employee);
  }

  render() {
    return (
      <div className="home__container">
        <h1>Welcome!</h1>
        <Route
          exact
          path="/employee/:id"
          render={props => (
            <EmployeeView {...props} employee={this.props.employee} />
          )}
        />
        <Route exact path="/" render={props => <GuestView {...props} />} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  employee: state.userReducer.employee,
  isAUser: state.userReducer.isAUser,
  id: state.userReducer.employee.id
});

const mapActionsToProps = {
  getUserByID,
  getUsers
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(HomeView);
