import React from "react";
import PropTypes from "prop-types";
import { EmployeeCard } from "../../presentational/EmployeeCard";
import styled from "styled-components";

const EmployeeList = styled.div`
  width: 100%;
  margin-top: 127px;
  display: flex;
  align-items: center;
  flex-direction: column;

  div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const EmployeeListContainer = props => {
  const employees = props.users.filter(user => user.user_type === "employee");
  return (
    <EmployeeList>
      <h1>Select an Employee</h1>
      <div>
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
    </EmployeeList>
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
      type_id: PropTypes.number,
      user_type: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      working_since: PropTypes.string.isRequired
    })
  ),
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default EmployeeListContainer;
