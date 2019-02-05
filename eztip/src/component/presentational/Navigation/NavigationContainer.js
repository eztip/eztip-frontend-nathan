import React from "react";
import { Link } from "react-router-dom";

const NavigationContainer = props => {
  const logout = e => {
    e.preventDefault();
    localStorage.clear();
    console.log("Working!");
  };
  return (
    <div className="navigation__container">
      <Link to="/login">
        <button onClick={logout}>Logout</button>
      </Link>
    </div>
  );
};

export default NavigationContainer;
