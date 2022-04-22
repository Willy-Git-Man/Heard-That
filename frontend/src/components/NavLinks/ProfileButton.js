import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
// import { Redirect } from "react-router";
import * as sessionActions from "../../store/session";

import "./Navigation.css";

function ProfileButton({ user }) {
  const [showMenu, setShowMenu] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    // history.push("/Splash");
  };

  return (
    <>
      <button className={"profileButton"} onClick={openMenu}>
        {/* <i className="fas fa-user-circle" /> */}
        <i className="fab fa-grav"></i>
        Logout
      </button>
      <div className={"dropDownMenu"}>
        {showMenu && (
          <ul className="profile-dropdown">
            <h1 className="userName">{user.username}</h1>
            <h1 className="email">{user.email}</h1>

            <li>
              <button className={"logoutButton"} onClick={logout}>
                Log Out
              </button>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default ProfileButton;
