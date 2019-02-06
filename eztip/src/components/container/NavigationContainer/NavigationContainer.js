import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutSite } from "../../../store/actions";

const NavigationContainer = props => {
  const logout = e => {
    e.preventDefault();
    props.logoutSite();
    props.history.push("/");
  };
  return (
    <div className="navigation__container">
      <Link to="/">
        <button onClick={logout}>Logout</button>
      </Link>
    </div>
  );
};

const mapActionsToProps = {
  logoutSite
};

export default connect(
  null,
  mapActionsToProps
)(NavigationContainer);
