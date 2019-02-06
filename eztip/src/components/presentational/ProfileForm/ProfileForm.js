import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateUser } from "../../../store/actions";

class ProfileForm extends Component {
  state = {
    userProfile: {
      first_name: "",
      last_name: "",
      occupation: "",
      profile_photo: "",
      tagline: "",
      working_since: ""
    }
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      userProfile: {
        ...this.state.userProfile,
        [e.target.name]: e.target.value
      }
    });
  };

  componentDidMount() {
    return this.props.loggedIn
      ? this.setState(
          {
            ...this.state,
            userProfile: this.props.userProfile
          },
          () => console.log(this.state)
        )
      : null;
  }

  goBack = e => {
    e.preventDefault();
    this.props.history.push("/");
  };

  updateProfile = e => {
    e.preventDefault();
    this.props.updateUser(this.state.userProfile);
    this.props.history.push("/");
  };

  render() {
    return (
      <form className="profile__form" onSubmit={this.updateProfile}>
        <input
          required
          autoComplete="off"
          type="text"
          name="first_name"
          placeholder="First name"
          value={this.state.userProfile.first_name}
          onChange={this.handleChange}
        />
        <input
          required
          autoComplete="off"
          type="text"
          name="last_name"
          placeholder="Last name"
          value={this.state.userProfile.last_name}
          onChange={this.handleChange}
        />
        <input
          required
          autoComplete="off"
          type="text"
          name="occupation"
          placeholder="Occupation"
          value={this.state.userProfile.occupation}
          onChange={this.handleChange}
        />
        <input
          required
          autoComplete="off"
          type="number"
          name="working_since"
          placeholder="Starting date of work"
          value={this.state.userProfile.working_since}
          onChange={this.handleChange}
        />
        <input
          required
          autoComplete="off"
          type="text"
          name="tagline"
          placeholder="Tagline"
          value={this.state.userProfile.tagline}
          onChange={this.handleChange}
        />
        <input
          required
          autoComplete="off"
          type="file"
          name="profile_photo"
          placeholder="Profile photo URL"
          value={this.state.userProfile.profile_photo}
          onChange={this.handleChange}
        />
        <button type="submit">
          {this.props.loggedIn ? "Update" : "Signup"}
        </button>
        <button type="button" onClick={this.goBack}>
          Back
        </button>
      </form>
    );
  }
}

ProfileForm.propTypes = {
  loggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  userProfile: state.userReducer.userProfile,
  loggedIn: state.userReducer.loggedIn
});

const mapActionsToProps = {
  updateUser
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ProfileForm);
