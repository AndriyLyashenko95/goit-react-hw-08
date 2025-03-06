import Navigation from "../Navigation/Navigation.jsx";
import UserMenu from "../UserMenu/UserMenu.jsx";
import Auth from "../Auth/Auth.jsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";

const Bar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <Auth />}
    </header>
  );
};

export default Bar;