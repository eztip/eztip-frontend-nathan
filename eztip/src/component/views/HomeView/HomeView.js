import React, { Component } from "react";
import { Route } from "react-router-dom";
import { EmployeeView } from "../EmployeeView";
import { GuestView } from "../GuestView";
import { connect } from "react-redux";
import { getUserByID, getUsers } from "../../../store/actions/index";

class HomeView extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.isAUser !== this.props.isAUser) {
      this.props.isAUser === "employee"
        ? this.props.history.push("/welcome/employee")
        : this.props.history.push("/welcome/guest");
    }
  }
  render() {
    console.log("Rendering!");
    return (
      <div className="home__container">
        <h1>Welcome!</h1>
        <Route
          path="/welcome/employee"
          render={props => (
            <EmployeeView {...props} employee={this.props.employee} />
          )}
        />
        <Route
          path="/welcome/guest"
          render={props => <GuestView {...props} />}
        />
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
