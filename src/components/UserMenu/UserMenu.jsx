import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { TbLogin2 } from "react-icons/tb";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      {user && <p>Welcome, {user.name}!</p>} {/* Виводимо ім'я користувача */}
      <button
        type="button"
        onClick={() => dispatch(logOut())}
      >
        <TbLogin2 />
        Log out
      </button>
    </div>
  );
};

export default UserMenu;