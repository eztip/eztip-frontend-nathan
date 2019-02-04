import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserByID } from "../../../store/actions/index";
import { Employee } from "../../presentational/Employee";

class EmployeeView extends Component {
  getEmployee = id => {
    this.props.getUserByID(id);
  };

  componentDidMount() {
    this.getEmployee(2);
  }

  render() {
    return (
      <div>
        <h1>EmployeeView</h1>
        <Employee employee={this.props.employee} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  employee: state.userReducer.employee
});

const mapActionsToProps = {
  getUserByID
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(EmployeeView);
