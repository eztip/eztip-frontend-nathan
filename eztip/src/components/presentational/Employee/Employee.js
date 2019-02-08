import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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
  align-items: center;

  @media(max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div:first-child {
    width: auto;
    max-width: 40%;
    @media(max-width: 800px) {
      max-width: 100%;
    }
    img {
      object-fit: cover;
      width: 300px;
      height: 300px;
      max-width: 100%;
      border-radius: 50%;
    }
  }

  div:last-child {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-left: 3%;
    @media(max-width: 800px) {
        margin-top: 15px;
        width: 80%;
      }
    h1 {
      margin-bottom: 15px;
    }

    p {
      margin-bottom: 20px;
      font-size: 2rem;

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
      @media(max-width: 500px) {
        flex-direction: column;
      }
      button {
        margin: 0 0 10px;
        width: 47%;
        @media(max-width: 500px) {
          width:100%;
        }
      }
    }
  }
`;

const Employee = props => {
  const { employee } = props;
  const goToUpdateForm = e => {
    e.preventDefault();
    props.history.push("/update");
  };
  return (
    <EmployeeProfile>
      <EmployeeProfileContent>
        <div>
          <img src={employee.profile_photo} alt="Profile avatar" />
        </div>
        <div>
          <h1>Personal Profile</h1>
          <p>
            <span>Username:</span> {employee.username}
          </p>
          <p>
            <span>First name:</span> {employee.first_name}
          </p>
          <p>
            <span>Last name:</span> {employee.last_name}
          </p>
          <p>
            <span>Occupation:</span> {employee.occupation}
          </p>
          <p>
            <span>Employed since:</span> {employee.working_since}
          </p>
          <p>
            <span>Tagline:</span> {employee.tagline}
          </p>
          <p>
            <span>Employee ID:</span> {employee.id}
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

Employee.propTypes = {
  employee: PropTypes.shape({
    first_name: PropTypes.string,
    id: PropTypes.number,
    last_name: PropTypes.string,
    profile_photo: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    tagline: PropTypes.string,
    type_id: PropTypes.number,
    user_type: PropTypes.string,
    username: PropTypes.string,
    working_since: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  })
};

export default Employee;
