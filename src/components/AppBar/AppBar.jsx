import React from "react";
import Navigation from "../Navigation/Navigation.jsx";
import UserMenu from "../UserMenu/UserMenu.jsx";
import AuthNav from "../AuthNav/AuthNav.jsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;