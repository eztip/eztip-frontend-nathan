import React, { Component } from "react";
import { Route } from "react-router-dom";
import { EmployeeView } from "../EmployeeView";
import { GuestView } from "../GuestView";
import { connect } from "react-redux";
import { getUsers } from "../../../store/actions/index";
import PropTypes from "prop-types";

class HomeView extends Component {
  componentDidMount() {
    this.props.getUsers();
    this.props.userType === "employee"
      ? this.props.history.push("/employee")
      : this.props.history.push("/guest");
  }
  render() {
    return (
      <div className="home__container">
        <Route path="/employee" render={props => <EmployeeView {...props} />} />
        <Route path="/guest" render={props => <GuestView {...props} />} />
      </div>
    );
  }
}

HomeView.propTypes = {
  history: PropTypes.object.isRequired,
  getUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  userType: state.userReducer.userType
});

const mapActionsToProps = {
  getUsers
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(HomeView);
