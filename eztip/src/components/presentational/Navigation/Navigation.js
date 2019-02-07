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
    height: 80px;
    margin: 0 auto;
    padding: 0 3%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border: 1px solid red;

    h1 {
      font-size: 3.5rem;
      font-weight: 900;
      margin-bottom: 15px;
    }

    a {
      p {
        font-family: "Raleway", sans-serif;
        font-weight: 700;
        font-size: 1.6rem;
        color: black;
        margin-bottom: 15px;

        &:hover {
          text-decoration: underline;
        }
      }
    }
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
        <h1>EZTip</h1>
        <div>
          <Link to="/">
            <p onClick={logout}>Logout</p>
          </Link>
        </div>
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
