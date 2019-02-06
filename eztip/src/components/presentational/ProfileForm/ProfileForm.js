import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ProfileForm extends Component {
  state = {
    user: {
      firstName: "",
      lastName: "",
      employer: "",
      date: "",
      tagline: "",
      imageURL: ""
    }
  };

  handleChange = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <form className="profile__form">
        <input
          required
          autoComplete="off"
          type="text"
          name="firstName"
          placeholder="First name"
          onChange={this.handleChange}
        />
        <input
          required
          autoComplete="off"
          type="text"
          name="lastName"
          placeholder="Last name"
          onChange={this.handleChange}
        />
        <input
          required
          autoComplete="off"
          type="text"
          name="employer"
          placeholder="Employer"
          onChange={this.handleChange}
        />
        <input
          required
          autoComplete="off"
          type="text"
          name="employer"
          placeholder="Employer"
          onChange={this.handleChange}
        />
        <input
          required
          autoComplete="off"
          type="number"
          name="date"
          placeholder="Starting date of work"
          onChange={this.handleChange}
        />
        <input
          required
          autoComplete="off"
          type="text"
          name="tagline"
          placeholder="Tagline"
          onChange={this.handleChange}
        />
        <input
          required
          autoComplete="off"
          type="text"
          name="imageURL"
          placeholder="Profile photo URL"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

ProfileForm.propTypes = {
  // Insert proptypes
};
