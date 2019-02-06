import React from "react";
import { connect } from "react-redux";
import { Employee } from "../../presentational/Employee";
import { ProfileForm } from "../../presentational/ProfileForm";
import { Route } from "react-router-dom";

const EmployeeView = props => {
  const { userProfile } = props;
  return (
    <div className="employee-profile__container">
      <h1>Employee</h1>
      <Route
        exact
        path="/"
        render={props => <Employee {...props} employee={userProfile} />}
      />
      <Route
        path="/update"
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
