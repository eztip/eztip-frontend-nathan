import React from "react";
import PropTypes from "prop-types";
import { EmployeeCard } from "../../presentational/EmployeeCard";

const EmployeeListContainer = props => {
  const employees = props.users.filter(user => user.user_type === "employee");
  return (
    <div className="employee-list__container">
      <h1>Select an Employee to Tip:</h1>
      {employees.map(employee => {
        return (
          <EmployeeCard
            match={props.match}
            history={props.history}
            employee={employee}
            key={employee.id}
          />
        );
      })}
    </div>
  );
};

EmployeeListContainer.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      first_name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      last_name: PropTypes.string.isRequired,
      profile_photo: PropTypes.string.isRequired,
      tagline: PropTypes.string.isRequired,
      type_id: PropTypes.number.isRequired,
      user_type: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      working_since: PropTypes.string.isRequired
    })
  ),
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  key: PropTypes.number.isRequired
};

export default EmployeeListContainer;
