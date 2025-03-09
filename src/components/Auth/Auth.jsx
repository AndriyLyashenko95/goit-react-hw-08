import React from "react";
import { NavLink } from "react-router-dom";

const Auth = () => {
  return (
    <div>
      <NavLink
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
      >
        LogIn
      </NavLink>
    </div>
  );
};

export default Auth;