import React from "react";
import { connect } from "react-redux";
import { Employee } from "../../presentational/Employee";

const EmployeeView = props => {
  return (
    <div>
      <h1>Employee</h1>
      <Employee employee={props.userProfile} />
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
