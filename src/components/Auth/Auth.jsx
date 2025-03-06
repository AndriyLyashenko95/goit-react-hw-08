import { NavLink } from "react-router-dom";
import clsx from "clsx";

const Auth = () => {
  return (
    <div>
      <NavLink
        className={({ isActive }) => clsx(c.link, isActive && c.active)}
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) => clsx(c.link, isActive && c.active)}
        to="/login"
      >
        LogIn
      </NavLink>
    </div>
  );
};

export default Auth;