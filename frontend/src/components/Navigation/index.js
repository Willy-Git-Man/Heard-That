import React, { useEffect } from "react";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";

import NavLinks from "../NavLinks/navLinks";

import "./Navigation.css";
import AlbumSongs from "../Albums/albumSongs";
import MySongs from "../Songs";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (

      <div className="navDiv">
        <NavLinks />
        <ProfileButton user={sessionUser} />





        </div>


    );
    <Redirect to="/songs" />

  } else {
    sessionLinks = (
      <div className="loginDiv">
        <LoginFormModal />
        <SignupFormModal />

        <div>
          <h1>hello</h1>
        </div>
      </div>
    );
  }

  // if (sessionUser) {
  //   return ()
  // }

  return (
    <>
      <ul className="navUl">
        <li className="navLi">
          {/* <NavLink exact to="/">Home</NavLink> */}

          {isLoaded && sessionLinks }
        </li>
      </ul>

    </>
  );
}

export default Navigation;
