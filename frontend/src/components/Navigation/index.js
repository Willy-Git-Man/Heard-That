import React from "react";
import { useSelector } from "react-redux";
import LoginFormModal from "../Auth/LoginFormModal";
import SignupFormModal from "../Auth/SignupFormModal";
import NavLinks from "../NavLinks/navLinks";
import MyAlbums from "../Albums";
import MySongs from "../Songs";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const userInfo = useSelector((state) => state.session.user);

  if (sessionUser) {
    return (
      <div className="navLi">
        {isLoaded && (
          <div>
            <MyAlbums userInfo={userInfo} />
            <NavLinks />
            <MySongs userInfo={userInfo} />
          </div>
        )}
      </div>
    );
  } else
    return (
      <div className={"profileDiv"}>
        {isLoaded && (
          <div className="loginDiv">
            <LoginFormModal />
            <SignupFormModal />

            <div className="loginMessage">
              <h1 className="welcomeGreetingTop">Welcome to Heard-That!</h1>
              <h2>Login or Signup below to start listening</h2>
            </div>
          </div>
        )}
      </div>
    );
}

export default Navigation;
