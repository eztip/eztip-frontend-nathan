import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./EmployeeCard.css";

const EmployeeCard = props => {
  const employee = props.employee
    ? props.employee
    : props.users
        .filter(user => props.match.params.id === user.id.toString())
        .pop();
  const giveTip = e => {
    e.preventDefault();
    props.history.push(`/welcome/guest/${employee.id}/tip`);
  };
  const goBack = e => {
    e.preventDefault();
    props.history.push("/welcome/guest");
  };
  return (
    <Link to={`/welcome/guest/${employee.id}`}>
      <div className="employee__card">
        <h2 className="employee__name">
          {employee.first_name} {employee.last_name}
        </h2>
        <p className="employee__id">{employee.id}</p>
        <p className="employee__tagline">{employee.tagline}</p>
        <p className="employee__working-since">{employee.working_since}</p>
        {!props.employee && (
          <div className="employee__buttons">
            <button type="button" onClick={giveTip}>
              Give Tip
            </button>
            <button type="button" onClick={goBack}>
              Back
            </button>
          </div>
        )}
      </div>
    </Link>
  );
};

EmployeeCard.propTypes = {
  employee: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    last_name: PropTypes.string.isRequired,
    profile_photo: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    type_id: PropTypes.number.isRequired,
    user_type: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    working_since: PropTypes.string.isRequired
  }),
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  users: state.userReducer.users
});

export default connect(
  mapStateToProps,
  {}
)(EmployeeCard);
