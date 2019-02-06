import React, { Component } from "react";
import PropTypes from "prop-types";
import { registerUser } from "../../../store/actions";
import { connect } from "react-redux";

class CreateUsernameForm extends Component {
  state = {
    username: "",
    password: ""
  };
  createUser = e => {
    e.preventDefault();
    this.props.registerUser({
      username: this.state.username,
      password: this.state.password
    });
  };
  cancel = e => {
    e.preventDefault();
    this.props.history.push("/");
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div>
        <form className="login__form" onSubmit={this.createUser}>
          <h1>Signup</h1>
          <input
            required
            autoComplete="off"
            type="text"
            name="username"
            value={this.state.username}
            placeholder="New username"
            onChange={this.handleChange}
          />
          <input
            required
            autoComplete="off"
            type="password"
            name="password"
            value={this.state.password}
            placeholder="New password"
            onChange={this.handleChange}
          />
          <button stype="submit">Signup</button>
          <button type="button" onClick={this.cancel}>
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

CreateUsernameForm.propTypes = {};

const mapActionsToProps = {
  registerUser
};

export default connect(
  null,
  mapActionsToProps
)(CreateUsernameForm);
