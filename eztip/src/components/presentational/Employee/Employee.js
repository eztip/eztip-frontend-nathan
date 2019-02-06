import React from "react";
import styled from "styled-components";

const EmployeeProfile = styled.div`
  margin: 115px 0 0;
`;

const Employee = props => {
  const goToUpdateForm = e => {
    e.preventDefault();
    props.history.push("/update");
  };
  return (
    <EmployeeProfile>
      <img src={props.employee.profile_photo} alt="Profile avatar" />
      <h2 className="username">Username: {props.employee.username}</h2>
      <p className="full-name">
        Full Name: {props.employee.first_name} {props.employee.last_name}
      </p>
      <p className="tagline">Tagline: {props.employee.tagline}</p>
      <p>ID: {props.employee.id}</p>
      <p>Employed Since: {props.employee.working_since}</p>
      <div className="employee-profile__buttons">
        <button type="button" onClick={goToUpdateForm}>
          Update
        </button>
        <button type="button">Tips Received</button>
      </div>
    </EmployeeProfile>
  );
};

export default Employee;
