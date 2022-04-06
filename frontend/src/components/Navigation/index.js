import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";

import NavLinks from "../NavLinks/navLinks";

import "./Navigation.css";
import SearchBar from "../SearchBar/SearchBar";
import MyAlbums from "../Albums";
import CreateAlbumModal from "../CreateAlbumModal/CreateAlbumForm";
import MySongs from "../Songs";
import CreateSongModal from "../CreateSongModal";
import { useHistory } from "react-router-dom";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
const history = useHistory()
  const userInfo = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <div>
      {/* <ProfileButton user={userInfo} /> */}
            <SearchBar />
            <MyAlbums userInfo={userInfo} />
            {/* <CreateAlbumModal userInfo={userInfo} /> */}
            <MySongs userInfo={userInfo} />
            {/* <CreateSongModal userInfo={userInfo} /> */}
      </div>
      <div className="navDiv">
        <NavLinks />
        {/* <ProfileButton user={sessionUser} /> */}
      </div>
      </>
    );
    // history.push('/songs')
  } else {
  // if (!sessionUser) {

    sessionLinks = (
      <div className="loginDiv">
        <LoginFormModal />
        <SignupFormModal />

        <div className="loginMessage">
          <h1 className="welcomeGreetingTop">Welcome to Heard-That!</h1>
          <h2>Login or Signup below to start listening</h2>
        </div>
      </div>
    );
  }

  if (sessionUser) {
    return (
      <>
        <ul className="navUl">
          <li className="navLi">

            {isLoaded && sessionLinks}
          </li>
        </ul>
        <div className="splashMessage">

        </div>
      </>
    );
  } else
    return (
      <>
        <div className={"mainNav"}>
          <div className={"profileDiv"}>{isLoaded && sessionLinks}</div>÷
        </div>
      </>
    );
}

export default Navigation;
