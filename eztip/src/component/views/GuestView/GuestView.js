import React from "react";
import PropTypes from "prop-types";

import { EmployeeList } from "../../container/EmployeeList";

const GuestView = props => {
  return (
    <div>
      <EmployeeList />
    </div>
  );
};

GuestView.propTypes = {};

export default GuestView;
