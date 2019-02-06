import React from "react";
import { connect } from "react-redux";
import { Employee } from "../../presentational/Employee";
import { ProfileForm } from "../../presentational/ProfileForm";
import { Route } from "react-router-dom";

const EmployeeView = props => {
  return (
    <div className="employee-profile__container">
      <h1>Employee</h1>
      <Employee employee={props.userProfile} />
      <Route
        path="/welcome/employee/update"
        render={props => (
          <ProfileForm {...props} employee={props.userProfile} />
        )}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  userProfile: state.userReducer.userProfile
});

export default connect(
  mapStateToProps,
  {}
)(EmployeeView);
