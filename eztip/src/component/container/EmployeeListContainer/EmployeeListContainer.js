import React from "react";
import PropTypes from "prop-types";
import { EmployeeCard } from "../../presentational/EmployeeCard";

const EmployeeListContainer = props => {
  const employees = props.users.filter(user => user.user_type === "employee");
  return (
    <div className="employee-list__container">
      <h1>Select an Employee to Tip:</h1>
      {employees.map((employee, index) => {
        return (
          <EmployeeCard
            match={props.match}
            history={props.history}
            employee={employee}
            key={index}
          />
        );
      })}
    </div>
  );
};

EmployeeListContainer.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      first_name: PropTypes.string,
      id: PropTypes.number,
      last_name: PropTypes.string,
      profile_photo: PropTypes.string,
      tagline: PropTypes.string,
      type_id: PropTypes.number,
      user_type: PropTypes.string,
      username: PropTypes.string,
      working_since: PropTypes.string
    })
  )
};

export default EmployeeListContainer;
