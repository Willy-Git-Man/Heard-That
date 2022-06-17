import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";

// import Songs from "./components/Songs";

import "slick-carousel/slick/slick.css";

import LoginForm from "./LoginFormModal/LoginForm";
import "slick-carousel/slick/slick-theme.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


function LoginRoute() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  // }, [dispatch]);

  return (
    <>
      <div className="loginMainDiv">
        <div className="loginInnerMainDiv">
          <div className="loginDiv">
            <LoginForm isLoaded={isLoaded}/>
          </div>
        </div>
      </div>

      <footer class="footer">
        <div class="footer-left">
          <h3 className="footerName">William <span>Grossman</span></h3>
        </div>

        <div class="footer-center">
          <div className="footerCell">
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
