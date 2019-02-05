import React, { Component } from "react";
import { Route } from "react-router-dom";
import { EmployeeView } from "../EmployeeView";
import { GuestView } from "../GuestView";
import { connect } from "react-redux";
import { getUsers } from "../../../store/actions/index";

class HomeView extends Component {
  componentDidMount() {
    this.props.getUsers();
    this.props.userType === "employee"
      ? this.props.history.push("/welcome/employee")
      : this.props.history.push("/welcome/guest");
  }
  render() {
    return (
      <div className="home__container">
        <h1>Welcome!</h1>
        <Route
          path="/welcome/employee"
          render={props => <EmployeeView {...props} />}
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
  userType: state.userReducer.userType
});

const mapActionsToProps = {
  getUsers
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(HomeView);
