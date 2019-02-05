import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { EmployeeListContainer } from "../../container/EmployeeListContainer";
import { EmployeeCard } from "../../presentational/EmployeeCard";
import { Route } from "react-router-dom";
import { PaymentView } from "../PaymentView";

const GuestView = props => {
  const users = props.users;
  return (
    <div className="guest__container">
      <Route
        exact
        path="/"
        render={props => <EmployeeListContainer {...props} users={users} />}
      />
      <Route
        path={"/employeelist/:id"}
        render={props => <PaymentView {...props} users={users} />}
      />
    </div>
  );
};

GuestView.propTypes = {
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

const mapStateToProps = state => ({
  users: state.userReducer.users
});

export default connect(
  mapStateToProps,
  {}
)(GuestView);
