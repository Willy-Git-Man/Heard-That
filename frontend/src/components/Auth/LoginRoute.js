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
import LoginForm from "./LoginFormModal/LoginForm";

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
        <div className="loginMainDiv">
      <div className="loginLeftSideDiv">

          <div className="profileDiv" >


          </div>
      </div>
            <div className="loginDiv">
              <LoginForm />
            </div>
          <div className="gitLinkedInDivsSplash">

            <a href="https://github.com/Willy-Git-Man/Heard-That" target="blank"><h2><FaGithub /></h2></a>

            <a href="https://www.linkedin.com/in/william-b-grossman/" target="blank"><h2><FaLinkedinIn /></h2></a>
          </div>
        </div>
      </>
    );
}

export default LoginRoute;
