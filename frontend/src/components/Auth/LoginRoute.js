import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
// import Songs from "./components/Songs";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import SignupFormModal from "./SignupFormModal";
import LoginFormModal from "./LoginFormModal";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import './index.css'

import { NavLink } from "react-router-dom";

export const PlayingContext = React.createContext();

function LoginRoute() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const userInfo = useSelector((state) => state.session.user);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

    if (!userInfo)
    return (
      <>
        <div className={"mainNav"}>
          <div className={"profileDiv"}>
            <div className="loginDiv">
              <LoginFormModal />
              <SignupFormModal />

              <div className="loginMessage">
                <h1 className="welcomeGreetingTop">Welcome to Heard-That!</h1>
                <h2>Login or Signup below to start listening</h2>
                {/* <h1><FaGithub /></h1> */}

                <div className="gitLinkedInDivsSplash">

                <a href="https://github.com/Willy-Git-Man/Heard-That" target="blank"><h2><FaGithub /></h2></a>
                {/* <br></br> */}

                <a href="https://www.linkedin.com/in/william-b-grossman/" target="blank"><h2><FaLinkedinIn /></h2></a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </>
    );
    }

export default LoginRoute;
