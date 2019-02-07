import React from "react";
import { connect } from "react-redux";
import { Employee } from "../../presentational/Employee";
import { ProfileForm } from "../../presentational/ProfileForm";
import { Route } from "react-router-dom";
import styled from "styled-components";

const EmployeeProfileContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const EmployeeView = props => {
  const { userProfile } = props;
  return (
    <EmployeeProfileContainer>
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
    </EmployeeProfileContainer>
  );
};

const mapStateToProps = state => ({
  userProfile: state.userReducer.userProfile
});

export default connect(
  mapStateToProps,
  {}
)(EmployeeView);
