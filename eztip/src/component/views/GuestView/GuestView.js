import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { EmployeeCard } from "../../presentational/EmployeeCard";

const GuestView = props => {
  const employees = props.users.filter(user => user.type === "employee");
  return (
    <div>
      <h1>Select an Employee to Tip:</h1>
      {employees.map(employee => {
        return <EmployeeCard employee={employee} />;
      })}
    </div>
  );
};

GuestView.propTypes = {};

const mapStateToProps = state => ({
  users: state.userReducer.users
});

export default connect(
  mapStateToProps,
  {}
)(GuestView);
