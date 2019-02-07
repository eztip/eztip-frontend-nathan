import React from "react";
import styled from "styled-components";

const EmployeeProfile = styled.div`
  margin: 100px auto 0;
  background: white;
  border: 1px solid #b5b5b5;
  display: flex;
  /* max-width: 500px;
  width: 100%; */
`;

const EmployeeProfileContent = styled.div`
  width: 100%;
  margin: 35px 7%;
  display: flex;
  flex-direction: row;

  div:first-child {
    width: auto;
    max-width: 40%;

    img {
      object-fit: cover;
    }
  }

  div:last-child {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 3%;

    h1 {
      margin-bottom: 15px;
    }

    p {
      margin-bottom: 20px;
      font-size: 1.6rem;

      span {
        font-weight: 700;
      }
    }

    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      margin: 0;

      button {
        margin: 0 0 10px;
        width: 47%;
      }
    }
  }
`;

const Employee = props => {
  const goToUpdateForm = e => {
    e.preventDefault();
    props.history.push("/update");
  };
  return (
    <EmployeeProfile>
      <EmployeeProfileContent>
        <div>
          <img src={props.employee.profile_photo} alt="Profile avatar" />
        </div>
        <div>
          <h1>Personal Profile</h1>
          <p>
            <span>Username:</span> {props.employee.username}
          </p>
          <p>
            <span>First name:</span> {props.employee.first_name}
          </p>
          <p>
            <span>Last name:</span> {props.employee.last_name}
          </p>
          <p>
            <span>Occupation:</span> {props.employee.occupation}
          </p>
          <p>
            <span>Employed since:</span> {props.employee.working_since}
          </p>
          <p>
            <span>Tagline:</span> {props.employee.tagline}
          </p>
          <p>
            <span>Employee ID:</span> {props.employee.id}
          </p>
          <div>
            <button type="button" onClick={goToUpdateForm}>
              Update
            </button>
            <button type="button">Tips Received</button>
          </div>
        </div>
      </EmployeeProfileContent>
    </EmployeeProfile>
  );
};

export default Employee;
