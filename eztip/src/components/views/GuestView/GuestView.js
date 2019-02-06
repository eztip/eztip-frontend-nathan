import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { EmployeeListContainer } from "../../container/EmployeeListContainer";
import { EmployeeCard } from "../../presentational/EmployeeCard";
import { Route } from "react-router-dom";
import { PaymentFormContainer } from "../../container/PaymentFormContainer";

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
        exact
        path={"/employee/:id"}
        render={props => <EmployeeCard {...props} />}
      />
      <Route
        path={"/employee/:id/tip"}
        render={props => <PaymentFormContainer {...props} />}
      />
    </div>
  );
};

GuestView.propTypes = {
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

const mapStateToProps = state => ({
  users: state.userReducer.users
});

export default connect(
  mapStateToProps,
  {}
)(GuestView);
