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
import HeardThatLogin from '../Images/HeardThatLogin.png'

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
          <div className="loginInnerMainDiv">

            {/* <div className="loginLeftSideDiv">
              <h1>Mobile</h1>
              <img src={HeardThatLogin} className="loginImage" />
            </div> */}

            <div className="loginDiv">
              <LoginForm />

            </div>
          </div>
        </div>

        <footer class="footer">

          <div class="footer-left">

            <h3 className="footerName">William <span>Grossman</span></h3>

          </div>

          <div class="footer-center">

            <div>
              <i class="fa fa-map-marker"></i>
              <p> New York, NY</p>
            </div>

            <div>
              <i class="fa fa-phone"></i>
              <p>434-242-8614</p>
            </div>

            <div>
              <i class="fa fa-envelope"></i>
              <p>william.b.grossman@gmail.com</p>
            </div>

          </div>

          <div class="footer-right">

            <p class="footer-company-about">
              <p>About Me</p>
              <p>

              I design applications across multiple full stacks
              </p>
            </p>


            <div class="footer-icons">
            <a href="https://github.com/Willy-Git-Man/Heard-That" target="blank"><FaGithub /></a>

          <a href="https://www.linkedin.com/in/william-b-grossman/" target="blank"><FaLinkedinIn /></a>
            </div>
          </div>

        </footer>

      </>
    );
}

export default LoginRoute;
