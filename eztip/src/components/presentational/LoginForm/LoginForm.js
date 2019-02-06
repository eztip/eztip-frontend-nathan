import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginSite } from "../../../store/actions";

class LoginForm extends Component {
  state = {
    loginUsername: "",
    loginPassword: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  clearForm = e => {
    e.preventDefault();
    this.setState({
      loginUsername: "",
      loginPassword: ""
    });
  };
  submitForm = e => {
    e.preventDefault();
    this.props.loginSite({
      username: this.state.loginUsername,
      password: this.state.loginPassword
    });
    this.props.history.push("/welcome");
  };
  componentDidMount() {
    this.props.history.push("/login");
  }
  render() {
    return (
      <form className="login__form" onSubmit={this.submitForm}>
        <h1>Please Login</h1>
        <input
          required
          autoComplete="off"
          type="text"
          name="loginUsername"
          value={this.state.loginUsername}
          placeholder="Username"
          onChange={this.handleChange}
        />
        <input
          required
          autoComplete="off"
          type="text"
          name="loginPassword"
          value={this.state.loginPassword}
          placeholder="Password"
          onChange={this.handleChange}
        />
        <button stype="submit">Login</button>
        <button type="button" onClick={this.clearForm}>
          Clear
        </button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  history: PropTypes.object.isRequired,
  loginSite: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  loginUsername: state.userReducer.loginUsername,
  loginPassword: state.userReducer.loginPassword
});

const mapActionsToProps = {
  loginSite
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(LoginForm);
