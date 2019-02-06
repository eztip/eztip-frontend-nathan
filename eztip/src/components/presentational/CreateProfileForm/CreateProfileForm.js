import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateUser, updateProfilePhoto } from "../../../store/actions";

class ProfileForm extends Component {
  state = {
    userProfile: {
      first_name: "",
      last_name: "",
      occupation: "",
      profile_photo: "",
      tagline: "",
      working_since: ""
    },
    id: null,
    username: null,
    selectedFile: null
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      id: this.props.newAccountID,
      username: this.props.newAccountUsername
    });
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      userProfile: {
        ...this.state.userProfile,
        [e.target.name]: e.target.value
      }
    });
  };

  goBack = e => {
    e.preventDefault();
    this.props.history.push("/");
  };

  handleFile = e => {
    this.setState({
      selectedFile: e.target.files[0]
    });
  };

  updateProfile = e => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("image", this.state.selectedFile);
    this.props.updateProfilePhoto(this.state.userProfile.id, fd);
    this.props.updateUser(this.state.userProfile);
    this.props.history.push("/");
  };

  render() {
    return (
      <form
        className="profile__form"
        onSubmit={this.updateProfile}
        method={"Post"}
        encType="multipart/form-data"
      >
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
          type="text"
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
          onChange={this.handleFile}
        />
        <button type="submit">Signup</button>
      </form>
    );
  }
}

ProfileForm.propTypes = {
  loggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  newAccountID: state.userReducer.newAccountID,
  newAccountUsername: state.userReducer.newAccountUsername
});

const mapActionsToProps = {
  updateUser,
  updateProfilePhoto
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ProfileForm);
