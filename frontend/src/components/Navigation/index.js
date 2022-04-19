import React from "react";
import { useSelector } from "react-redux";
import "./Navigation.css";
import LoginFormModal from "../Auth/LoginFormModal";
import SignupFormModal from "../Auth/SignupFormModal";
import NavLinks from "../NavLinks/navLinks";
import "./Navigation.css";
import MyAlbums from "../Albums";
import MySongs from "../Songs";
import { Redirect } from "react-router-dom";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const userInfo = useSelector((state) => state.session.user);

  // let sessionLinks;
  // if (sessionUser) {
  //   sessionLinks = (
  //     <>
  //         {/* <MyAlbums userInfo={userInfo} /> */}
  //         <Redirect to="/Albums/1" />

  //     </>
  //   );
  // }
  // else {
  //   sessionLinks = (
  //     <div className="loginDiv">
  //       <LoginFormModal />
  //       <SignupFormModal />

  //       <div className="loginMessage">
  //         <h1 className="welcomeGreetingTop">Welcome to Heard-That!</h1>
  //         <h2>Login or Signup below to start listening</h2>
  //       </div>
  //     </div>
  //   );
  // }

  if (sessionUser) {
    return (
      <>
        {/* <div className="navUl">
          <div className="navDiv">{isLoaded && sessionLinks}</div>
        </div> */}
          {/* <Redirect to="/Albums/1" /> */}

      </>
    );
  } else
  {/* <div className={"profileDiv"}>{isLoaded && sessionLinks}</div> */}
    return (
      <>
        {/* <div className={"mainNav"}>
          <div className={"profileDiv"}>  <div className="loginDiv">
        <LoginFormModal />
        <SignupFormModal />

        <div className="loginMessage">
          <h1 className="welcomeGreetingTop">Welcome to Heard-That!</h1>
          <h2>Login or Signup below to start listening</h2>
        </div>
      </div></div>

        </div> */}
      </>
    );
}

export default Navigation;
