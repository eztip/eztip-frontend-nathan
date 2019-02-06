import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutSite } from "../../../store/actions";
import styled from "styled-components";

const NavContainer = styled.div`
  width: 100%;
  height: 80px;
  background: #43d9b8;
  -webkit-box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.19);
  box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.19);
  position: fixed;
  top: 0;
  left: 0;

  div {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const NavigationContainer = props => {
  const logout = e => {
    e.preventDefault();
    props.logoutSite();
    props.history.push("/");
  };
  return (
    <NavContainer>
      <div>
        <Link to="/">
          <button onClick={logout}>Logout</button>
        </Link>
      </div>
    </NavContainer>
  );
};

const mapActionsToProps = {
  logoutSite
};

export default connect(
  null,
  mapActionsToProps
)(NavigationContainer);
