import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./EmployeeCard.css";

const EmployeeCard = props => {
  return (
    <Link to={`/employeelist/${props.employee.id}`}>
      <div className="employee__card">
        <h2 className="employee__name">
          {props.employee.first_name} {props.employee.last_name}
        </h2>
        <p className="employee__id">{props.employee.id}</p>
        <p className="employee__tagline">{props.employee.tagline}</p>
        <p className="employee__working-since">
          {props.employee.working_since}
        </p>
      </div>
    </Link>
  );
};

EmployeeCard.propTypes = {
  employee: PropTypes.shape({
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
};

export default EmployeeCard;
